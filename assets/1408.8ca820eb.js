const a=[.28,.28,.11,.55,.02,.06,.03,0,0,.11,.62,.37,.39,0,.54,.79,.61,.41,.7,.29,.01,0,.11,.01,.12,0,0,.01,.68,0,0,0,0,.37,.09,.27,.34,.39,0,.02,.21,0,.05,.7,.09,.34,.45,.02,0,0,.22,.28,.48,.09,0,.94,.18,.01,.33,.01,0,0,0,.21,.01,0,0,.09,.14,.17,.84,.63,0,0,.06,.32,.01,0,.9,0,.03,.03,.99,0,.07,0,.01,.53,0,.38,0,.09,0,.56,.12,.02,0,0,.76,0,.9,0,0,.16,0,.1,.03,0,.01,0,.86,0,.07,.19,.05,.52,.27,0,0,0,.95,0,.27,.46,.3,0,.05,.21,0,.13,0,.44,.46,0,.12,.14,0,0,0,.12,0,.69,0,.01,.81,.96,.52,.49,0,.49,0,0,.44,.25,0,0,.05,.17,.19,.4,0,0,.48,0,0,0,0,0,0,0,1,0,0,0,0,0,.38,0,0,.01,.3,.77,.23,.81,0,.08,.46,.51,0,.08,.48,0,.9,0,0,.05,0,.3,.49,0,.95,0,.06,.73,.16,0,.95,0,0,.63,0,.58,.35,.43,.02,0,.29,0,0,0,0,0,0,.07,0,.06,0,0,0,0,.24,.11,1,.16,.95,.99,.22,.01,.04,.54,0,.11,0,0,0,0,.76,0,.23,.36,0,.01,0,0,0,.75,.41,0,0,.86,.27,0,0,0,.07,0,0,0,.31,.03,0,.99,.02,.04,.01,.43,0,0,0,0,0,0,.98,.15,0,0,0,.29,0,0,0,0,0,0,0,.03,.81,.01,.01,0,.52,.18,0,.78,.49,.11,.19,0,0,.43,0,.11,.47,.56,.38,0,0,0,.05,0,0,.53,.28,0,0,0,0,.23,.97,0,.02,0,.1,.69,0,.14,0,0,.73,0,0,.07,.47,.1,.51,.01,.25,0,.06,0,0,0,.11,0,.03,.91,0,0,0,.42,.16,.2,0,0,.96,.11,.34,.09,0,.41,0,.53,.02,.02,0,0,.64,0,.45,0,.57,.71,.71,.4,.11,0,.01,.92,0,0,0,.76,.77,.13,.33,.17,0,.7,.52,.29,.01,0,0,0,0,.92,.21,0,0,0,.08,.01,.01,0,0,.87,0,.89,0,.41,.49,.18,0,.85,.68,.21,.07,.55,0,0,0,.05,.01,.32,0,.23,.41,0,.03,0,0,0,0,.16,0,0,.26,0,.54,0,0,0,0,.01,.54,.32,0,.07,0,0,.03,0,0,0,.65,.47,.46,.73,0,.17,.01,.19,.24,.27,0,.01,0,0,.05,0,0,.94,0,0,0,0,0,.03,.8,.22,.93,.43,.33,.15,.01,.07,0,.3,.01,0,0,.55,0,.09,0,.02,.41,0,.17,0,0,0,0,0,0,0,0,0,0,.01,0,.05,.53,.04,0,.39,.58,.28,.68,0,0,0,.75,0,.88,.03,0,.32,.07,.55,.03,0,.69,0,.01,.52,.04,0,0,.42,0,.06,.02,.29,0,.93,0,0,.15,.92,.04,0,0,0,.85,.61,.21,.25,0,.06,0,.16,.4,.05,0,.23,.74,0,0,.86,0,.85,0,0,0,.32,.15,0,0,.51,.79,.77,.41,0,0,0,0,.18,0,0,.03,.03,.06,0,.39,0,0,0,.96,.99,.57,.83,.38,0,.25,.82,.1,0,.12,.77,0,.1,0,.72,0,.02,.01,0,0,.02,.42,0,.19,0,.14,0,.01,0,0,0,0,0,0,.09,.35,0,.01,0,.59,0,.05,0,0,.05,.01,.24,.08,0,.74,.26,.15,.02,.01,0,.82,.32,.75,0,0,.01,0,.88,.69,0,0,0,0,.05,.26,.91,.55,.13,.07,0,0,.07,.01,0,0,0,.78,.79,.04,.94,.87,.83,.17,.02,0,.02,0,0,0,.02,.58,.91,.32,.56,.66,0,0,0,0,0,.11,.41,.39,.02,.09,.94,0,0,.46,.82,.08,.89,.78,0,.05,.04,0,0,0,.08,0,0,.47,.54,.14,.33,.68,.07,0,0,.81,.18,0,.75,.02,0,.25,0,0,.01,.07,.1,.06,0,.03,.11,.95,0,.03,.08,0,.53,0,.59,0,.43,0,0,.01,.95,0,.01,0,0,.02,0,.05,.02,.39,0,.07,0,0,0,.95,0,0,.01,0,.05,0,0,.09,0,.98,0,.31,.35,0,0,.38,0,0,.11,0,.64,.89,.72,0,0,0,0,.01,0,.79,.04,.21,.4,0,.16,.62,.07,.31,0,.53,.45,.07,.06,0,.83,.97,0,.02,0,.18,0,0,.05,.65,0,0,0,.01,0,0,.56,.44,0,0,.47,.28,0,0,0,0,0,0,.05,.08,.11,.05,0,0,.44,0,0,.13,.26,.46,0,0,0,.79,0,.09,.55,0,.02,.26,0,.52,.08,0,.31,0,.01,0,.36,.03,0,0,.57,.04,.53,0,.01,.01,.34,.8,.68,.22,.01,.3,0,.17,0,.72,0,0,.09,0,0,.44,0,0,.75,0,.08,1,.6,0,.06,.59,.19,0,0,0,.13,.57,0,0,0,0,.49,0,0,.05,.91,0,0,0,.01,0,.01,.28,.16,0,.99,0,.05,0,.65,0,.18,0,.11,.02,.26,.02,.25,0,.37,.4,.01,.01,.5,0,.18,.01,0,0,.71,.04,0,0,0,.01,0,0,0,0,0,0,.97,.79,0,0,0,0,0,.83,0,.75,.7,.75,.73,.34,.44,.92,.17,.35,.01,.22,.11,.59,.67,.03,0,0,0,.03,.86,0,.42,.04,.87,0,.04,.01,0,.3,0,0,.78,.77,.55,0,.85,.41,0,.34,0,.18,0,.5,.74,0,.18,0,.99,.77,0,.84,.13,.01,.06,0,0,.23,0,.13,.05,.03,.24,0,.01,0,.39,.15,.54,0,0,0,.03,.28,.35,0,0,0,.19,.36,0,.42,0,0,.02,.7,0,.85,.26,0,0,.11,.33,0,0,.07,.03,0,0,.43,0,0,0,0,0,.01,0,0,.12,.05,0,.12,.53,0,.15,.34,0,0,.85,0,0,.8,.4,0,.01,.1,.15,.02,.49,.01,.34,.63,.19,0,.02,0,0,.09,.1,.83,.03,0,0,.66,.13,.03,.02,.75,.01,0,.93,.22,.44,.03,.58,.61,.1,0,.01,.99,0,.55,0,.19,.32,.02,0,.12,0,.01,.05,.01,.02,0,0,0,.76,0,0,0,.68,.85,.72,0,.53,0,.64,.49,0,.02,.78,.1,.6,.03,.23,.8,0,.59,.74,0,.18,.64,0,0,0,.01,0,.83,0,0,0,.06,.22,.09,0,.02,.1,.19,0,.08,0,.03,0,.06,0,.19,0,0,.94,1,0,.51,0,0,0,0,.06,0,.81,.08,0,.01,.98,.53,.72,.48,0,.06,.74,.99,.85,.14,.62,0,.3,0,.81,.75,0,.82,.9,0,0,0,0,0,.12,.42,0,0,0,0,0,0,.51,.15,.43,0,0,.21,0,.74,.2,0,.9,0,.13,.17,0,.88,.79,.09,.2,.29,.32,.47,0,0,0,0,0,.14,0,.01,0,.01,0,.7,.73,.71,.12,0,0,.04,0,0,.05,.18,0,.16,.02,0,0,.19,.46,0,.07,.47,.08,0,0,.54,0,0,0,.09,0,0,0,.97,.58,0,.22,.65,0,0,.87,.03,.23,.14,.09,.11,0,.07,.56,0,0,0,0,.01,0,0,0,0,0,0,0,.91,.08,.17,0,0,0,.81,0,.02,.07,0,.67,0,.98,.23,.1,.01,.36,.17,.03,.01,.19,0,.04,.36,.59,0,0,0,0,0,0,.2,.14,0,.56,.06,.39,0,.64,0,.05,0,.12,.34,0,0,.22,0,0,.08,.01,.02,.74,.01,.03,0,.57,.23,.09,.54,0,.37,.57,.13,.39,.23,.15,.04,0,0,0,0,0,.23,.1,0,.35,0,.06,0,0,.64,0,.76,.53,.83,.05,.12,.04,.33,0,0,0,0,0,.01,.29,.52,0,.5,0,0,0,0,.98,.26,.01,0,.21,.32,0,0,.91,0,0,0,.42,0,.01,.35,0,0,0,0,.89,.75,0,0,0,0,0,.09,0,.74,.4,.19,.01,.96,0,.01,0,.01,0,.11,0,0,.78,.02,.69,.13,0,.11,.95,0,.22,0,.89,0,0,0,0,.17,.09,0,.37,.55,0,.01,0,0,.03,0,.33,0,0,0,.06,0,0,0,0,0,.04,0,0,0,.01,0,.8,0,0,.22,0,0,.19,0,0,.81,0,0,0,0,0,0,0,.04,.76,0,.01,0,0,.86,0,0,0,0,.21,0,.64,0,0,0,0,0,.34,.01,.01,0,0,0,0,.14,0,.83,0,.33,.22,.21,0,.15,0,.21,.02,.28,.03,.65,0,0,.02,.48,.78,0,0,0,0,0,0,.7,0,.48,0,.32,0,.51,.71,.74,0,.55,.19,0,.16,0,.66,0,0,0,0,0,0,0,.93,0,0,.03,.79,.95,0,0,0,.36,0,0,.11,0,0,0,0,.28,.1,.16,0,0,0,.83,0,0,0,.59,0,.66,0,0,.17,0,.75,.1,0,.59,0,.07,0,.94,0,.02,.85,0,0,.1,0,0,.07,.39,0,.01,.1,0,0,.03,.85,0,0,.12,.05,.47,.06,0,.37,.03,.4,0,0,0,.08,.15,.16,.1,.15,0,0,0,0,0,0,0,.2,.08,.93,.11,0,0,.12,0,0,0,0,0,0,.81,0,.67,.35,0,.01,.32,.02,.03,.02,.55,0,.02,0,0,.58,.59,.26,.43,.25,0,0,0,.08,.89,.77,.37,.99,0,0,.26,.09,.35,.9,.09,.05,0,0,.48,0,.19,.01,.22,.1,0,.02,0,0,0,.18,0,.01,0,0,0,0,.01,0,0,0,0,0,.01,.23,0,.15,0,.76,0,.28,0,.08,.36,.41,0,.67,0,.81,.03,0,0,.14,0,0,.26,0,0,0,.19,0,.05,.17,.09,.28,.03,.75,.79,.56,0,0,.05,0,.63,.22,.89,0,.04,.32,.06,.29,.06,.77,0,.01,0,.24,0,.07,.02,.19,.7,0,.41,0,0,0,.14,.19,.02,.56,0,.03,.06,0,0,0,.73,.72,.15,0,.56,.96,.46,.58,0,0,0,0,.11,0,0,0,0,.77,.48,.79,0,.29,.04,0,0,.19,0,.72,0,0,0,0,0,0,0,.33,0,.04,.35,.35,.06,.07,.72,.29,0,0,.79,0,.22,.7,.64,0,0,.91,0,.56,.82,.13,.37,.02,.19,.5,0,.06,.28,.03,.09,0,.36,.61,.07,0,0,.04,.03,0,0,0,.03,.2,.81,.8,.01,0,0,.38,.02,.3,.51,.04,0,.8,.58,0,.18,.01,.79,0,.14,0,.08,0,.26,0,.35,0,.18,.39,.07,0,.5,0,.89,0,0,.68,.35,.01,0,.01,0,.02,0,0,0,0,.05,.42,0,.03,0,.07,0,0,.14,0,.01,.09,0,.84,0,.07,0,0,.01,.12,0,.03,.05,.01,0,0,.81,.01,.02,.08,.88,.22,.22,.95,0,.03,.01,0,0,.89,0,0,.06,0,.01,.01,0,.26,0,.68,0,.12,.84,0,.35,0,.05,.49,.83,0];export{a as pvalData};
