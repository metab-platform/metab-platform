const a=[.14,.05,0,.73,0,.01,.56,.5,0,.98,0,.08,.09,0,0,.32,.2,.68,.01,.52,.66,.43,.71,0,0,0,.89,.79,.98,.92,0,.49,0,.51,0,.14,0,0,.39,0,.48,0,0,.42,.95,0,.62,.03,.62,.7,.99,.47,.19,0,0,0,0,.18,.53,0,0,0,0,.44,.07,.29,0,0,.4,.03,.66,0,.12,.01,0,.33,.59,0,0,.39,0,0,1,0,.61,.6,0,.1,0,0,.83,.89,.12,0,0,.35,0,.7,.76,.01,.89,0,0,.81,0,.57,0,.03,0,0,.94,.02,.58,0,.02,0,.68,.74,.18,0,.45,.2,.01,.41,.7,0,0,.91,.37,0,.83,.93,.91,.73,.01,.68,.55,.6,.54,.36,0,.99,.04,0,.52,.84,.41,.21,0,.74,0,.63,.91,.34,.65,.2,.07,.25,.31,0,.9,0,1,.04,.1,0,0,.75,.12,0,.33,.66,.17,.23,0,.92,.36,.78,.31,0,.61,.16,.88,0,0,.24,.03,.4,.5,.67,.07,.07,.46,0,0,0,0,.01,.19,.27,.27,0,0,.17,.01,0,.1,.25,0,.05,.27,0,.35,0,.12,.63,.94,.63,.65,.41,0,.01,0,0,.01,0,.88,.57,0,.23,.35,.48,0,0,.99,.21,0,.03,.7,.24,.09,0,.45,.2,.64,.52,.08,.32,.34,.77,.23,.21,0,0,0,.86,.67,0,.38,0,.63,.36,0,0,.3,0,.38,0,0,0,.16,.47,0,0,0,.58,.24,.02,0,.68,.17,.26,.02,0,.03,0,.87,0,.41,.14,.08,.06,0,.68,.79,0,0,.54,.71,.35,.8,0,.16,.22,.01,.03,.01,0,.94,0,.01,.44,.03,1,0,.36,.31,.46,0,.03,.01,.17,0,0,.1,.08,0,.03,0,.07,0,.01,0,.5,.04,.61,.62,0,.88,.01,.04,0,.2,.38,0,0,.56,.35,.01,.31,0,.02,0,.04,0,.01,0,.29,0,0,0,.67,.29,.04,.2,0,.68,0,.29,.5,.2,.06,.13,.34,0,.35,.95,0,.84,.52,.22,.27,.65,.87,.14,0,.71,.61,0,0,0,.14,.57,.71,.77,0,.25,.13,.03,.91,.52,.21,0,0,.1,.21,0,0,0,0,0,0,.68,0,.04,1,0,0,.17,.03,.1,0,.74,.22,.6,0,0,.6,.41,.18,.39,.45,0,.06,.06,0,.13,0,0,0,0,0,.01,.77,.6,0,0,0,.86,0,0,.05,0,.18,.72,.27,.75,0,.39,0,0,0,0,.01,.66,0,0,.86,.02,0,.11,0,0,.3,.91,0,0,.08,0,.63,0,0,0,.06,.94,.06,.02,0,.01,0,.03,.09,.3,.01,0,0,.18,.17,0,.65,.48,.05,0,0,0,.39,.31,0,0,.1,0,.13,0,.96,.89,.75,.07,.36,.01,0,.36,0,0,.72,.45,.33,.12,0,.77,0,.17,.17,.08,.1,.56,.38,.03,0,.01,.03,.54,.82,.06,.97,.13,.22,.47,.6,0,.02,.93,0,0,0,0,.11,.08,0,0,.19,0,.74,.49,.55,.04,.16,.88,.33,.03,.41,0,0,.35,.25,0,0,.03,.82,.22,.63,.17,.01,0,.05,0,0,0,.01,.53,0,.22,.51,.6,0,.96,0,0,0,.01,.08,0,0,0,.01,0,.86,.44,.36,.56,.01,.66,0,.24,.05,.05,.54,0,.67,.29,.22,.2,.94,0,.94,.44,.54,.8,.48,0,.07,.07,.01,.13,.07,0,0,0,.68,.84,.49,.64,0,.91,.44,.17,0,0,.01,.15,0,.51,0,.43,0,0,.01,0,.28,.03,.29,0,0,0,.56,.01,.05,.99,.18,0,0,.01,.33,.38,.61,0,.13,0,0,.02,.19,.59,.04,0,0,.66,.12,0,0,0,.39,.22,.02,.11,.02,.47,.33,0,0,0,0,0,.79,.04,0,.07,.78,.26,0,.37,.91,0,.77,.3,0,.58,.21,.6,.06,.31,.75,.37,0,0,.08,0,.02,.4,.84,.49,0,0,.02,0,.55,.02,.67,0,.55,.25,.21,0,0,.39,.74,.29,.13,.03,0,.76,.09,.92,.01,.76,.7,0,.15,.01,.3,0,.79,.5,.21,0,.05,.23,0,0,.1,.92,.2,.01,.37,0,.58,.74,.08,.45,.8,0,.79,0,0,.12,0,0,0,0,0,0,.01,.32,.64,0,0,0,.39,0,.01,.22,0,.58,.49,0,0,0,.01,0,.55,.58,.66,.48,.17,0,.74,0,.46,0,.89,.99,0,.5,.2,.79,0,.14,0,.57,.02,.62,.79,.91,0,.38,.87,.41,.51,.11,.01,.06,.59,0,0,.01,.28,.06,0,.17,.21,.17,.09,.78,.71,0,.46,.32,0,.52,.62,.08,.01,0,0,.06,0,.14,.03,.01,0,.07,.4,.83,.01,.02,.69,.23,.67,.18,.55,.84,.12,.92,0,.11,0,0,.6,.85,.02,0,.03,0,0,0,0,0,.16,.01,0,0,0,0,.83,.64,.9,.64,0,.82,.38,.48,.99,.39,.76,.08,.01,0,0,.2,.51,.15,.79,.25,.02,.04,0,0,0,.88,0,0,.62,.1,0,0,0,0,0,.01,.6,0,0,.15,.02,.96,0,.74,.79,.93,0,.9,.68,.57,.08,.31,.04,.34,.75,0,.2,0,0,0,.05,.03,.7,0,.56,.22,0,0,.01,.03,.33,0,0,0,.91,.46,.24,.25,0,0,.39,.09,.61,0,.76,.03,.14,.03,.04,.01,.27,.46,.19,.23,.86,.88,.31,.61,.1,.2,.99,.54,.29,.32,.02,.74,.2,.03,.19,.93,0,.02,.82,.36,.05,0,.03,.05,.47,0,.82,0,0,.46,.71,0,.61,.21,.27,.56,.52,.02,.03,.94,0,0,.48,.02,.77,.02,0,.04,.06,.86,.9,.27,.05,.04,.01,.78,0,.08,.01,.01,.27,.01,.66,.3,0,.74,.33,.79,0,.92,.16,.86,0,0,.31,.07,.12,0,0,.02,0,0,.5,0,0,.36,.18,.5,.62,0,.51,.64,.02,.62,0,0,.09,0,.18,0,0,.86,.19,0,0,.55,.03,.01,0,0,0,0,.77,0,.06,.06,.52,0,.24,.81,.35,.08,0,.17,0,.58,0,.79,.23,.18,.3,.18,0,.89,.96,.05,0,0,0,.02,0,0,.03,.63,.76,0,0,1,0,0,.72,0,0,0,.01,.54,.77,.12,0,.07,.87,.82,.92,.08,.68,0,0,.95,.96,0,0,0,0,0,0,.92,0,0,.04,0,.72,0,.42,0,.25,.62,.57,0,0,.01,.17,0,0,.04,0,.01,.03,.21,.01,0,.08,.02,0,0,0,.15,0,.16,0,.1,0,.65,0,0,.95,0,.75,.01,.15,0,.92,.24,0,.2,.87,.64,.01,0,.84,.43,.49,.42,.52,.45,.74,.02,0,0,.17,0,0,0,.34,.36,.7,0,0,0,.3,.62,.62,.33,.44,0,.17,0,.56,.45,.83,.01,.77,.02,0,.64,0,0,0,.99,.38,.12,.07,.6,.64,.23,.34,0,.03,0,.05,.58,.13,.03,.57,.74,.21,0,.07,0,.69,.04,.19,0,.55,.32,.07,0,0,0,0,.03,.31,.01,0,.01,0,0,0,.76,.33,.39,0,.01,.11,0,.49,.1,0,0,0,.33,.82,.25,0,0,.94,.55,.2,.01,0,.43,.37,0,0,0,.29,.08,0,.16,.01,0,.05,.4,.79,.54,0,0,.01,.04,0,0,.81,.31,0,.68,.08,0,.01,0,0,.96,0,.46,.02,.09,.04,0,0,.19,.01,.02,0,0,.1,.89,.12,.03,0,0,0,.68,0,.33,.56,0,.86,.89,.1,.17,.51,.25,0,.56,.91,0,0,.1,0,.52,.01,0,0,.52,.89,0,.03,.73,.09,.37,0,0,0,.86,.02,0,.21,0,0,.02,.39,.29,0,.71,.49,0,.45,0,.32,.39,.32,.55,.64,0,.16,.68,0,.83,.83,0,.74,0,0,.62,.64,0,.7,.16,0,.37,0,.46,.23,.86,.92,.39,0,.01,.38,.08,0,0,0,0,.34,.33,.28,.56,.73,0,.4,0,0,0,.08,0,0,.16,.44,.51,.88,0,.58,0,0,0,.05,.1,0,.06,.03,.66,0,.02,.09,.94,0,.6,0,.01,.45,.63,.7,.49,.78,.69,0,.72,.31,0,.62,0,0,0,.08,.43,0,0,.91,.83,0,.18,.55,0,.16,.01,0,.65,.58,.05,0,.64,.09,0,.89,.48,.33,.03,0,.13,.01,0,.45,.99,0,.15,0,0,.28,0,0,0,.01,.33,.89,.04,.8,.02,.58,0,0,.63,.98,0,.03,0,.2,.48,.03,0,.01,.06,.86,0,.58,0,.4,0,0,0,0,.45,0,.75,.09,0,0,.25,.51,0,0,0,.76,0,.88,0,0,0,0,.65,.36,.24,.43,0,.52,.14,0,.12,.11,.16,0,0,0,.64,.01,0,.1,.12,0,.08,.36,.01,0,.03,0,.01,0,.15,0,.03,0,.41,.58,.17,.1,.86,.1,0,0,0,.64,.01,.15,.3,0,0,0,0,0,.05,.73,.35,.05,0,.62,.2,0,0,0,.42,0,.06,.04,.05,.18,0,.91,.38,0,0,0,0,.46,0,0,0,0,0,0,.27,.13,0,.07,0,.38,0,0,.24,0,0,.31,0,.07,.52,0,.44,.78,.05,.33,0,.96,.99,0,0,0,.84,0,0,0,0,0,0,.33,.22,.04,0,.92,0,.7,.66,.43,.79,0,0,.01,.06,0,.01,.62,0,.15,0,0,0,.19,.03,.48,.12,0,.06,0,.02,0,.21,.01,.2,0,.29,.38,.21,.8,0,.83,0,0,0,0,.56,0,0,0,.43,.52,.88,0,.03,.12,.14,0,.23,0,.47,.18,.33,.04,0,0,.1,0,0,.02,0,.44,.12,0,.35,0,0,0,.1,.8,0,.01,0,0,.21,.23,0,0,0,0,0,.02,.86,0,0,0,.71,.96,.12,.51,0,0,0,.36,0,0,0,0,0,0,0,.2,0,.12,.02,0,.39,.42,.48,0,0,0,.01,.84,0,.01,0,.27,.77,.74,.41,.79,.36,0,.03,0,.07,0,.03,.02,.11,.67,.15,.25,.1,.88,0,.15,.7,0,.77,.64,.01,.16,.16,.01,.47,0,.53,.5,0,0,0,.54,0,.79,0,.46,0,.05,0,.05,.37,.02,.05,.01,.56,0,.01,.21,0,0,0,0,.02,.75,0,.02,.66,.18,.03,.21,0,0,.08,0,0,.68,.23,.65,0,0,.46,.24,0,0,0,.89,.01,.32,0,.63,.91,0,.25,.04,0,.34,.07,0,.65,.06,.57,0,.08,0,.76,.51,.15,.67,0,.09,.99,.43,.92,.18,0,0,0,.06,0,0,0,0,0,.14,.5,.01,0,.66,0,.17,.15,.84,0,0,.57,0,.17,0,0,.35,.86,.25,.37,0,.76,.08,.18,0,0,.16,0,0,.24,.05,0,0,.01,.63,0,0,0,.31,.17,0,.01,0,0,0,.19,0,.35,.56,0,0,0,0,0,.36,0,.01,0,.42,.79,0,0,0,0,0,0,0,.11,0,0,.21,.29,0,0,0,0,0,.5,0,0,.01,0,0,.28,0,.86,.73,0,.03,0,0,.25,.91,.05,.35,0,.09,0,.01,.01,0,.07,.09,0,.95,.64,0,0,.03,0,.15,.73,0];export{a as pvalData};
