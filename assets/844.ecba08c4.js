const a=[.47,.2,0,.65,.01,.07,.33,0,.01,.91,.1,.25,.49,.22,0,.92,.02,.94,.39,.2,.25,0,.14,0,.35,.92,0,.02,.48,0,0,0,.48,.4,0,.63,0,0,.07,.18,.7,.42,.5,.96,.18,.02,.12,.96,0,0,.62,.29,0,.02,0,.19,.62,.04,.76,.55,0,.99,.76,.54,.62,0,.87,0,1,.85,.98,.05,0,.09,.02,.09,.23,0,0,0,.48,.95,.9,.73,.41,0,.66,.95,.25,.01,0,.65,0,0,.09,0,.13,.01,.19,0,.87,.69,.01,.29,0,.16,.27,.18,.79,.09,.54,0,.05,.04,.71,0,.01,0,.32,.52,.3,.03,.42,.05,.01,0,.04,.87,0,.01,0,0,.61,0,0,.8,0,0,0,.06,.42,.16,.01,.74,.85,.33,.99,.02,.08,.96,.61,0,.74,.47,0,0,.83,.17,.22,0,0,.25,.37,0,0,0,.81,0,0,.99,.85,0,0,0,.06,0,.53,0,0,.15,.2,.68,.49,0,0,0,.06,.41,0,.99,.45,0,.88,0,.01,.01,.06,.01,.1,0,.1,0,.03,.69,.03,0,.04,0,0,.04,0,0,.39,.01,.11,0,.8,0,0,.04,.02,0,.32,.03,.01,.02,0,0,.01,.01,.69,.23,.17,0,.13,.65,0,.01,.06,.77,0,0,0,0,0,0,.09,.03,.02,.55,0,.96,0,0,.91,.63,.74,.33,.13,0,.57,0,.04,.62,0,0,.04,.55,.71,.61,0,.81,.04,0,.16,.57,0,0,.14,0,0,0,0,.02,0,.02,0,.01,.03,0,0,0,.43,0,0,.45,.92,.03,.13,0,.25,0,0,.76,.86,.1,.49,0,0,.15,.65,.57,.75,.65,.55,0,.02,0,0,.17,.23,.75,0,.94,0,0,.86,.68,.3,0,.1,.02,0,.98,0,.13,0,0,0,.03,0,.12,.64,.66,0,.03,.75,0,.95,0,.03,0,.92,0,.41,.01,.02,.05,.13,0,.83,.65,0,.33,.28,.06,.73,.01,0,.69,0,.99,.05,0,0,0,.5,.88,.67,0,.49,.69,.98,.91,.89,.06,.03,.5,.92,.82,.1,.36,.85,.01,.02,0,0,.61,.9,.08,.11,0,.04,.01,0,.55,0,.35,.16,.38,0,.13,0,.12,.01,.76,.68,0,0,.01,.65,.06,0,.5,.35,0,.03,.68,0,0,0,0,.5,.76,0,0,.32,1,.03,.3,.13,.32,.02,.43,0,0,0,.19,.17,.01,0,0,.73,0,.92,.03,0,.01,0,.07,0,.25,.13,0,.38,.48,.13,.55,.18,.01,.12,0,.07,.01,0,.94,.53,0,.01,0,.02,0,.03,0,0,0,.02,0,.37,0,.24,.26,.1,0,.02,.07,0,.83,.45,0,0,.98,.51,.2,.98,0,.03,.77,.07,0,.43,0,.25,0,0,0,.02,0,0,.27,.01,0,.01,.29,.03,.32,.05,.07,.66,.02,0,0,.11,0,.78,.18,0,.3,0,.47,.08,0,.72,0,.12,.12,0,0,.12,.13,0,.01,.02,0,.11,.78,.12,0,.51,.07,0,0,0,0,.32,.5,.29,.32,0,.81,.03,0,.36,0,.09,0,.8,.67,0,.63,.03,.34,.1,0,0,0,0,.24,0,0,.73,.84,.53,.53,0,.83,.82,0,.06,0,.19,.01,0,0,0,0,0,.66,.2,.46,.96,0,.11,0,.03,.9,0,0,.05,.95,0,0,0,.26,0,.05,.01,0,.51,0,.95,.77,.54,0,.69,.01,.87,0,0,0,0,.52,0,.17,0,.63,0,.66,.97,0,.02,.79,0,.01,.97,.64,0,.15,.2,.4,0,.49,.07,0,.48,.86,.69,0,.04,.66,.02,.44,.96,0,.01,0,.01,.01,.42,.62,.5,0,.45,.71,0,.09,.32,.71,.71,0,.69,.17,0,.11,.51,.02,.14,.56,.18,.41,.48,0,0,.07,.17,.23,.34,0,.71,0,.88,0,.08,0,.34,.65,0,.12,.66,.66,0,.85,0,.33,.59,.02,.47,0,.27,.01,.85,0,.74,.02,0,0,0,.45,.37,.03,.08,.64,0,0,.63,.48,.02,0,0,0,.29,.32,.05,0,.01,.19,.76,0,.62,.03,.01,0,.49,.15,0,0,.96,.09,.02,.43,0,0,.19,.47,0,.17,0,0,.1,0,0,.36,.66,.54,0,.28,0,0,.77,0,0,0,.56,0,.67,0,0,.01,0,0,0,.96,.86,.43,0,.01,0,.39,0,.99,.6,.06,.89,0,.05,0,.07,0,.45,.04,.02,.4,0,.25,.92,.01,.77,.03,.65,.18,.01,.02,0,.5,.29,.04,0,0,.45,0,.02,.5,.03,0,0,.02,.09,0,0,.25,.09,0,0,.7,.78,.01,0,0,0,.25,0,.02,.55,.44,0,0,.11,.96,0,0,0,.73,.19,0,0,0,.89,0,.87,.93,0,.91,.08,.96,0,.01,0,.12,.79,0,.64,.01,.38,0,.71,.9,.78,.31,.3,.19,.02,.57,.68,.69,.25,.58,.11,0,.04,0,.44,0,0,0,.71,0,.72,0,0,.96,0,.3,0,.04,.73,0,.96,0,.05,0,0,0,0,.22,.78,.01,0,.82,.77,.19,0,.1,0,.15,0,.01,0,.05,.51,.33,0,.76,0,.57,0,.29,.7,.13,.42,.03,.91,.16,0,.17,.34,.39,.06,0,.24,.44,0,0,0,.09,.83,.82,.01,0,0,.29,.07,0,0,0,0,0,0,.65,.25,.12,0,0,0,0,.64,0,.18,.82,.66,.65,.21,.26,.35,.57,.71,0,.08,.37,.67,.48,.42,0,0,0,0,.33,0,0,0,.15,.88,.01,.94,0,.35,0,.34,.76,.24,.43,0,.97,.94,0,.29,0,.02,0,.51,.55,0,0,0,.25,.46,0,.73,.18,.23,.29,0,.19,.89,0,.47,.41,.34,0,0,.8,0,.32,.02,.14,0,0,0,.12,0,.92,0,0,.01,0,.61,0,0,0,.37,.03,.62,0,.51,.39,0,0,.76,.05,0,.08,.62,0,.15,0,0,.18,0,0,.81,.86,0,.04,0,.63,.01,.04,.35,.56,.47,.61,.99,0,0,.41,.01,.03,.12,.16,0,.35,.22,0,.02,.05,.81,.32,.87,0,0,.29,0,.81,.01,.19,.93,0,.61,0,.98,0,.44,0,.89,.35,.66,.9,.24,0,.03,.02,.78,.99,0,.18,.84,0,.65,0,.9,.42,.85,.18,.45,0,.55,.23,.05,.26,.41,0,0,.02,.64,0,0,.24,0,.85,.37,.96,0,.25,.5,0,.4,.34,.01,0,.31,0,.41,0,0,.7,.21,.65,.56,.37,.56,.31,.06,.09,.32,.27,0,.09,0,0,0,0,.01,0,.68,0,.05,0,.4,.48,0,0,0,.58,.38,.92,.84,0,.69,0,0,0,0,0,.61,.8,0,.54,.32,.44,.95,.71,0,.49,.01,.15,.84,.84,.01,.51,.01,.37,.55,.54,.42,0,.16,.47,0,.31,0,.84,.64,0,.18,0,0,.47,0,0,0,.19,.01,.68,.33,0,.66,0,.85,.67,0,.46,0,.04,.81,0,.55,.41,0,.07,.23,.99,.87,.95,.54,0,0,0,.43,.31,.29,.08,.92,.02,.22,.14,.38,0,0,0,.02,0,.02,.01,0,.16,0,.01,0,.08,0,.19,0,0,.39,0,0,0,0,.95,.09,0,.39,.66,0,0,.41,.88,0,.48,.94,.01,0,.03,.12,.11,.7,.01,.01,0,.24,.24,0,0,.72,.03,0,0,0,0,0,0,.28,.35,.12,0,0,0,.02,0,.54,.02,.11,.02,0,0,0,.07,0,0,.07,0,.04,0,0,.94,0,.52,.75,.7,0,.51,0,.14,0,0,0,0,0,.22,.02,.8,0,.7,0,0,.37,0,.17,0,0,.04,.19,.49,.35,0,.02,0,.02,0,.02,.32,.23,.39,.69,0,.24,.88,.43,.94,.13,.15,.7,0,.85,0,.57,.63,.26,.5,0,.34,0,0,0,.47,.59,0,.37,.21,.3,.72,.29,0,.19,.49,.12,.26,.42,0,.01,.22,.36,0,.38,0,0,.69,.06,.14,.01,.9,0,.59,0,0,.94,.85,.02,.2,0,.17,0,.97,.32,0,0,.93,0,.19,.14,0,0,.2,0,0,.85,.01,.45,.09,.95,.23,.18,0,.08,0,.25,0,.01,0,0,.36,.93,.12,.06,0,.1,.8,.54,.01,.03,.13,0,0,0,.56,.03,.51,.66,.71,.62,0,0,.44,0,0,.53,.77,0,.63,0,0,.67,0,.02,.14,.34,0,0,0,.03,0,.01,0,.03,.55,.03,0,.06,0,.21,.01,.48,.03,.21,.16,0,0,.27,0,0,.92,.88,0,.18,.21,.84,.52,0,0,0,0,0,.93,.44,.84,.03,0,0,0,.06,.28,.95,.2,.07,0,.5,0,0,0,.81,.12,.52,.06,.46,0,.01,.01,.36,.47,0,0,0,.02,.05,.17,0,.01,0,0,0,.05,.91,.49,.99,0,.32,0,.43,.52,.64,0,0,.62,.73,.58,0,.32,0,.55,.02,.01,.02,.38,0,.95,0,0,.65,.89,.03,.08,.12,.37,.06,.15,0,.38,.02,0,0,0,.35,.01,0,.24,.99,0,0,0,0,0,.03,0,.09,0,.01,.46,.63,.84,0,.01,.99,.85,.28,0,.76,0,.17,.02,0,0,.17,0,0,.2,.35,.99,.03,0,0,.12,0,.02,.56,.64,.01,.19,.01,0,.21,.61,.45,.82,0,.01,0,0,0,0,.57,.01,.99,0,0,0,.4,.87,0,.65,.06,.53,.73,0,0,0,.01,.63,0,0,0,.4,.91,0,.27,.4,.26,.13,0,.93,.2,.18,.17,.21,.28,.48,0,.06,.85,.16,0,.75,0,.56,.04,0,.49,.16,.41,.26,.08,.08,.04,.04,0,0,0,0,0,0,.71,.39,0,.14,.08,.28,.52,.87,0,0,0,.85,.82,.06,.7,0,0,0,.19,.27,.67,.28,0,0,.12,.02,.6,.03,0,.95,.01,0,.1,0,0,0,.31,.64,.69,.77,.22,.24,0,.15,0,.81,0,.04,0,0,.01,0,0,.49,.38,.65,.15,.67,.83,.01,0,0,0,.89,.12,.69,.02,0,.52,.06,.64,.69,.04,.2,0,.7,0,.23,.32,0,0,.41,.08,.1,.05,0,.11,0,.71,0,.01,.04,.96,.11,.01,0,0,0,.64,.53,.05,.06,.26,0,.61,.73,.16,.4,.73,.85,.74,0,.09,0,.02,.73,.79,.13,.93,0,.06,.8,.87,.64,0,.53,.1,.21,0,0,0,0,.02,.09,.29,.18,.31,.15,.14,.01,.1,.2,.33,0,.76,.02,.66,.1,.96,.73,0,0,0,.64,.09,.11,.01,.05,.26,.06,0,.17,0,.03,0,0,0,0,.05,.33,.67,0,.18,0,.64,0,0,.78,.96,.03,.03,.65,0,.04,.14,.12,0,.02,0,.14,.18,0,.65,.02,.76,.82,0,.78,.01,0,.03,0,.04,0,.22,.21,0,.34,.01,0,.24,.77,0,0,.05,.01,0,.21,0,0,.02,.48,.57,.82,.02,.18,.3,.81,.89,.14,0,.04,0,.6,.13,.01,.36,0,.01,.01,0,0,.08,.03,.24,.03,.03,.04,0,.35,0,0,.94,.03,.82,0,0,.84,.45,.28,.03,.51,0,.48,0,0,0,0,.68,.33,.4,0,0,.65,0,.75,.54,.01,.09,.01,.09,.75,.27,0];export{a as pvalData};
