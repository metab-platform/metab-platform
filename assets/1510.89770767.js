const a=[.71,.01,0,.46,0,0,.04,.03,0,.8,0,.33,.29,0,0,.34,0,.72,.04,.01,.89,.8,.64,0,0,0,.87,.62,.1,.96,0,.71,0,.15,0,.18,0,0,.44,.02,.51,0,0,.56,.15,0,.12,0,0,.82,0,.13,.75,0,.21,0,0,.08,.15,0,.12,0,0,.86,0,.37,0,0,.09,.76,.12,0,.1,.03,0,.32,.26,.15,.16,0,.09,0,.5,0,.95,.88,0,.11,0,0,.04,.58,0,0,0,.48,0,.61,.98,.02,.23,0,.1,.22,.11,.45,.99,.64,0,.18,.03,.69,.73,.01,.35,0,.24,.88,.05,0,.02,1,0,.75,.54,.01,0,.42,.2,0,.8,.13,.78,.15,0,.12,.07,.42,.66,.07,0,.01,0,0,0,.66,.31,.64,0,.65,0,.03,.71,.01,.21,.1,.82,.05,.42,0,.01,.09,.15,.94,0,.21,.02,.89,.85,0,0,.43,.34,.15,0,.15,.75,.39,.44,0,.2,.11,.2,.05,.32,.17,.03,.4,.24,.83,.38,.07,.75,0,0,0,.08,.08,.11,.85,0,0,0,.11,.33,.05,.71,.78,.37,.01,.8,0,.42,0,.08,.05,.21,.2,.18,.73,.17,.42,.81,0,.01,0,.77,.98,.2,.69,.88,.02,0,.1,.26,0,0,0,.02,.27,.99,0,.3,.06,0,.78,.71,.56,.26,.32,.32,.64,.28,.12,0,.82,.17,0,.25,.08,.72,0,0,0,.45,.17,.8,0,0,0,.2,.65,0,.08,0,.58,.25,.29,0,0,.34,.63,0,0,.7,0,.84,0,.41,.38,.08,.36,0,.33,.09,0,0,.75,.83,.13,.46,0,.77,.36,.24,0,.87,.29,.04,0,0,.03,.18,.01,.56,.11,0,.02,.17,.09,0,.96,0,0,0,.62,0,0,.05,.63,.09,.01,.01,.36,.1,.98,.69,.17,.05,.58,0,.01,.04,.66,0,.01,.95,.41,.01,.9,0,.01,0,.84,.2,0,.63,.45,.03,.03,0,.64,.33,.79,.84,.01,.25,0,.63,.4,0,.01,0,.34,.42,.09,.18,0,.61,.18,.23,.86,.16,.62,.9,0,.1,.47,0,0,.01,0,.31,.68,.3,0,.9,.01,0,.69,.68,.83,.02,0,.35,.8,0,.04,.01,.08,.21,0,0,.01,.82,.24,0,0,.49,.45,.02,0,.28,.03,0,0,0,.02,.96,0,.8,.53,0,.03,.02,0,.79,0,0,0,.05,0,0,0,.32,.05,0,0,0,.64,0,.32,0,.49,.81,.34,.27,0,.23,0,.01,0,.04,.24,.15,.13,0,.46,.01,0,.38,0,0,.01,.06,0,0,0,0,.88,.01,0,.02,0,.15,.86,.25,0,0,.49,.15,.34,.22,0,0,0,0,.98,0,.1,.51,.01,.02,0,0,.13,.76,0,0,.83,0,.91,0,.87,.23,.5,.9,.59,.35,0,.17,0,.9,.18,.5,0,.32,.34,.33,0,.95,0,.26,0,0,.02,.52,.01,.03,.04,.49,.02,.01,.61,.01,.79,.35,.57,.06,.37,.43,0,0,.18,0,.02,.09,.25,.09,.95,.36,.47,.19,.26,.61,.13,.25,.2,.88,.59,.15,.03,0,.02,0,0,.2,.28,.13,.08,0,.01,.01,.87,.11,0,0,.07,.36,0,.88,.4,.65,.11,.39,0,0,0,0,.25,0,0,0,.09,.01,.36,.17,.03,.18,.22,1,0,.01,.06,0,.21,0,.49,.85,.04,.69,.83,.28,.93,.18,.66,.02,.05,0,.69,.25,.58,.18,.59,.09,.13,0,.07,.93,.95,.2,0,.88,.94,.06,0,.01,0,.4,.23,.14,0,.87,0,0,.01,0,.75,.01,.16,0,0,0,.05,.37,.04,.52,.54,0,0,0,.43,.43,.57,.18,0,0,0,.12,.23,.75,.04,0,0,.33,.03,.29,0,0,.26,.86,.24,.01,.01,.33,.44,0,.05,.03,.06,0,0,0,.01,.87,.67,.96,0,.06,.91,0,.21,.9,.02,.1,.54,0,.96,.51,.82,0,.01,0,.34,0,.04,.12,.67,.67,.23,.34,.4,0,.05,.04,.03,0,.62,.75,.09,0,.01,.96,.61,.54,.65,0,0,.79,.06,.18,.17,.99,0,0,.09,.82,.03,0,.75,.54,.17,0,.47,.04,0,0,0,.03,0,0,.07,0,0,.07,.59,.54,0,0,.1,0,.36,.92,0,.14,.12,.68,.24,.38,.81,.59,.78,.21,0,0,.59,0,0,.08,.97,.01,.07,0,0,0,0,0,.12,.08,.85,.92,0,0,.34,0,.6,0,.04,.99,0,.39,0,.59,0,.7,0,.22,.41,.95,.44,.07,0,.22,.29,.06,.14,.49,.55,.01,.87,.03,0,.28,.36,.33,.03,.18,.16,0,.18,.39,.44,0,.86,.64,.82,.11,.01,0,0,0,0,.6,.06,.08,0,.18,0,.1,.79,.8,.01,.8,.09,.31,.09,.75,.06,.88,0,.7,0,.22,0,0,.56,.74,0,0,.36,0,0,0,.52,.01,0,.02,0,.22,0,0,.94,.48,.7,.01,0,0,.08,.02,.17,.18,.68,.33,0,.11,.01,.69,.35,.11,.7,.67,.88,.01,0,0,0,.04,0,0,.05,.13,.04,0,0,0,0,.29,.77,0,0,.04,.79,.14,0,.66,.37,0,0,.26,.02,.16,.46,.94,.87,.88,0,0,.22,0,.02,0,.36,.18,.66,.03,.71,.74,.54,.02,.32,.01,.62,0,.02,0,.11,.12,.07,.79,0,0,.45,.84,.03,.07,.61,0,0,0,.73,.26,.28,.61,.6,.38,.27,.8,.87,.49,.81,.66,.14,.34,.28,.17,0,.14,.17,.02,.37,.02,0,.18,.9,.29,.22,0,.75,.01,.67,0,.15,.01,.24,.49,.66,0,.45,0,.44,0,.27,.06,.99,.98,0,0,.13,0,.92,.22,0,.9,.04,.93,.06,.08,.43,.4,.01,.48,0,.3,.98,0,.19,.02,.62,.1,0,.87,.01,.37,0,.18,.03,.78,0,.01,.31,.69,.02,.01,.01,.93,0,0,.22,0,0,0,.52,.9,.23,.09,.52,.48,.03,.86,0,.93,0,0,.69,.68,.01,.63,.95,0,0,.14,.18,0,0,0,0,0,.83,0,.67,0,.74,.7,.32,.36,.26,.65,0,.88,0,.6,0,.32,.56,.93,.15,.63,0,.01,.7,.01,0,0,.03,0,0,0,.05,0,.75,0,.01,.49,0,0,0,0,.78,0,.89,.39,.44,.23,.01,.48,.03,0,.67,.08,.01,0,0,.49,.79,0,.07,0,0,.09,0,0,.03,0,.26,.01,.92,0,.39,0,.1,.1,.19,.03,0,.01,.01,0,0,.68,.19,.63,.3,.56,.62,0,0,.36,0,.02,.03,.01,0,.18,0,.98,.01,.24,.03,.91,.87,0,.16,0,0,0,.08,0,0,.1,.51,.49,0,0,0,0,.38,.81,.95,.67,.01,.26,0,0,.65,0,0,0,.29,.62,.01,0,0,0,.64,0,.44,.12,.35,0,.01,0,.48,.81,.11,0,0,.34,.01,.13,.01,.02,0,0,.23,.16,.7,.21,.48,.03,.01,0,.5,0,0,.89,.51,.01,.63,.8,.18,.01,.06,0,.21,0,.01,0,.65,.49,.01,0,0,0,0,0,.57,.76,.02,0,.51,0,0,0,.77,.05,0,.14,.07,0,.96,.15,0,0,.24,.39,.32,.88,0,0,.01,.24,.94,.01,.01,.04,0,.07,0,.45,.82,.95,0,0,.03,.21,0,.21,.18,.72,0,0,0,0,0,.01,.76,.66,.02,.39,.12,.42,.78,.15,0,.1,.88,.02,.72,.03,.34,.02,0,.01,.53,0,.61,0,.64,.83,.57,.31,.02,.24,0,.14,.94,.41,0,.48,.26,.18,.76,.84,.81,.82,.04,.28,.57,.1,0,.33,.03,.41,.54,0,0,.28,0,0,.13,.02,.11,.94,.02,0,0,0,.78,.37,.8,.01,0,0,.39,.85,0,.4,.72,.16,.5,0,.07,.05,.15,.01,.04,0,.57,.86,0,.13,.47,0,.19,0,0,.18,.37,.28,.06,.46,0,.08,0,.04,.31,.67,.31,.32,.02,.62,.54,.34,0,0,0,0,.54,.13,.8,.48,.01,0,.32,.3,0,.67,.45,.87,.05,.75,.87,.04,.34,.01,.46,0,.04,.08,.03,.76,.25,.07,.2,.02,0,.35,.27,.4,.15,.02,0,.04,.01,.03,.03,.53,.66,.68,0,.02,0,0,.65,.04,.14,0,.31,0,0,0,.01,0,.68,.01,.92,0,.02,.21,0,.02,.18,.21,.06,.86,.51,0,0,.4,.36,.12,0,.46,0,.02,.29,.03,0,.13,0,0,.41,.15,.02,0,0,0,.89,0,.28,0,0,0,.27,.01,.1,0,.06,.01,.02,.91,.09,.3,0,.19,.96,0,.65,0,.86,0,.09,0,0,0,0,.07,.81,.18,0,0,.42,0,.02,.12,.01,.16,0,.02,0,0,0,.52,.31,0,.68,0,.3,.06,0,.32,.06,.06,.14,0,0,.56,.35,.02,0,.01,.02,.01,0,0,0,.5,.01,.99,0,.12,0,.25,.05,0,0,.09,.05,.59,.06,.01,.19,0,.28,.83,.01,.01,.01,0,.01,0,0,.06,0,.53,.55,.01,.22,.75,0,.8,0,.97,.59,.04,.24,.54,.15,.11,0,.6,0,0,0,0,.13,.01,.54,.08,.49,0,.01,0,.07,0,.16,.04,.37,.03,0,.64,0,.19,0,0,.21,.68,0,.35,.61,.26,.14,0,.73,.46,0,0,0,0,0,0,0,0,0,0,.51,.41,.55,0,1,.07,.69,.4,.25,.02,0,.03,.13,.08,0,.55,.29,0,.03,.01,0,0,.91,.64,.58,.31,.17,1,.06,.08,0,.05,.01,.41,0,0,.21,.01,.35,.01,.17,.01,0,0,0,.5,.22,0,0,.45,.75,.41,0,.03,0,.01,.03,.7,.02,.43,.11,.09,.07,.06,.13,0,0,0,.01,.17,.84,.15,.83,.17,0,0,0,0,0,0,.1,0,.27,0,0,0,0,0,0,.72,.13,.34,.28,0,0,.03,.45,.3,.87,0,0,.15,.42,0,0,0,.07,0,0,.02,.48,.13,.2,.01,0,.03,.15,.83,0,0,0,0,.01,.02,.52,.02,.58,.23,.24,.09,.01,.01,0,0,0,.22,0,.01,0,.32,.01,.21,.32,.63,.38,0,.68,.02,0,.02,.27,0,.92,0,.35,.31,0,0,0,.01,.04,.1,.73,0,.51,0,.45,0,.83,.36,.97,.17,0,.09,.46,.83,0,0,1,.01,0,0,.14,.05,.49,0,.97,.32,0,.71,.52,0,0,0,0,0,0,.76,.65,0,0,.25,.08,.09,.26,0,.67,.44,0,0,.58,.49,0,.01,.12,0,.37,.01,0,.05,.01,.01,0,.22,0,.02,.7,.7,.23,.02,0,.02,.28,.11,.75,0,0,.48,0,.2,0,0,0,0,.02,.27,.46,0,.02,0,.81,.48,.09,0,0,.35,0,.46,.03,0,.09,.02,.1,.71,.03,.15,.3,.57,0,0,0,0,.35,.88,.04,.97,0,.16,.5,.53,0,0,.18,.59,0,.37,0,0,.01,.14,0,.67,.08,0,0,0,0,0,0,0,.78,.02,0,.02,0,.2,0,.04,0,0,0,0,0,0,.64,.37,0,0,0,0,0,.02,0,0,.51,0,0,0,0,.09,.57,.01,.02,0,0,.78,.25,.13,.04,0,.16,0,0,0,.09,.64,.08,.85,.57,.01,0,.63,.34,0,0,.73,.08];export{a as pvalData};
