const a=[0,0,0,.45,0,.48,.01,.51,.01,0,0,.88,.78,0,0,.6,.02,.52,.06,.76,.59,0,.25,.02,0,0,0,.1,0,0,0,0,0,.16,.86,.11,0,0,0,0,.4,0,0,.86,.21,.02,.99,.06,.54,0,.07,.81,0,0,0,.01,0,.1,0,0,0,0,0,.96,.05,.03,0,0,.48,.46,.58,0,0,.04,0,.89,.07,0,0,.24,0,0,.14,0,.09,0,0,.6,0,0,0,.19,.02,0,.66,.5,0,.02,.58,0,.55,0,0,.34,0,.35,.07,.14,0,0,.49,0,.97,0,.4,0,.69,.01,0,0,.52,.16,0,.42,.29,0,0,.05,.05,0,.79,0,.18,.02,0,.75,.01,0,.01,.41,0,.66,0,0,.92,.35,.97,.32,0,.13,0,.95,.84,.99,.54,0,.35,.88,.02,0,.15,0,.72,0,.01,0,0,0,.5,0,.89,.05,.27,.3,0,.02,.99,.07,0,0,.16,.55,.26,0,0,.79,.54,.05,.01,.03,.28,.04,.45,0,0,0,0,.01,.83,0,.1,0,0,.8,0,0,.79,0,0,.82,.93,0,.66,0,.13,0,.98,.13,.02,0,0,0,0,0,0,0,.36,.02,0,0,.43,.86,0,0,.18,.5,0,.89,.45,1,0,0,.98,.4,.02,.25,.2,.09,.13,.59,.1,.11,0,.01,0,.32,.11,0,.17,0,.55,.02,0,0,.39,0,.02,0,.42,0,.54,0,0,0,0,.95,.67,0,0,.43,0,0,.01,0,0,0,.01,0,.09,.09,.69,0,0,.48,.36,0,.17,0,.55,0,.96,0,.01,.05,.33,0,.99,0,.01,.28,0,.55,.05,.89,0,0,.15,0,0,0,0,.7,0,0,.32,0,0,.58,.46,0,0,0,.02,.4,0,.7,.1,0,.15,0,0,0,.02,.7,0,0,.21,0,0,0,0,.22,.09,0,0,0,0,.62,0,0,0,.19,0,.05,.49,0,.02,0,0,.16,.37,0,.07,.74,0,.01,0,0,.79,0,.27,.97,.77,.13,.65,0,.23,.96,0,0,0,.65,.6,.59,.37,0,0,.03,.85,.21,.16,.01,0,0,0,.45,0,0,0,0,0,0,.33,0,.05,.76,0,0,0,0,.35,0,.63,.57,.06,0,0,.78,0,.04,.65,.38,0,.31,.09,0,0,0,0,0,0,0,0,.51,0,0,0,0,.66,0,0,0,0,.16,.13,.49,0,0,.11,0,0,0,0,0,.99,.15,0,.37,0,0,.28,0,0,.62,0,0,0,.68,0,0,0,0,0,0,0,.03,0,.09,0,0,.55,.88,.02,.16,0,0,.26,.17,0,.8,0,.92,0,0,0,.37,.11,0,0,0,0,.07,0,.24,0,.05,.01,.2,0,0,.36,0,.49,.76,0,.87,.02,0,.77,0,.01,.32,.12,.85,.96,.37,0,0,.42,.22,.87,0,.34,.52,.25,.18,.28,.6,0,.07,.01,0,0,0,0,.35,0,.93,0,.75,0,.12,0,.81,.37,.03,.37,.9,0,.48,0,0,.52,.1,0,0,.22,0,0,.02,.15,.03,0,0,0,0,0,0,.3,0,.05,.34,.88,0,.99,0,0,0,0,.16,0,0,0,.01,0,0,0,.02,.11,.24,.5,0,.98,.03,.22,.53,0,.29,.66,.54,.94,.95,.01,.37,.05,.06,0,0,0,.05,.27,0,0,0,0,0,0,.37,.21,0,.03,0,0,.28,.02,0,.59,0,.57,0,.23,0,.04,0,0,.61,0,.08,.17,.98,0,0,0,0,.01,.22,.37,.01,0,0,0,.4,.22,0,0,.83,0,0,0,.23,.73,.75,0,0,.21,0,0,0,0,.15,.36,.03,.26,.07,.73,.01,0,.02,0,0,0,.25,0,0,.48,.44,.06,0,.44,0,0,.75,.01,.37,.22,.37,.88,.12,.01,.17,.35,0,0,.34,0,0,0,0,.01,0,0,0,0,.88,0,.02,0,.16,.08,.42,0,0,0,.22,.39,0,0,0,.17,0,.12,.58,.07,0,0,.41,.69,0,0,.38,.01,0,0,0,0,0,0,.22,.18,.19,.63,.01,0,.56,0,0,.03,.98,0,0,0,.52,.76,0,0,0,0,0,.22,0,0,.13,0,0,0,0,0,0,0,0,.46,.01,0,0,0,0,0,.04,0,.66,.54,.41,0,0,0,.19,0,.16,.33,0,.86,.21,.78,0,.36,0,.18,0,.42,.32,.22,0,.19,.13,.61,.05,.12,.08,.02,0,0,0,.49,.62,0,0,.43,.02,0,.59,.7,.02,0,.44,.73,0,0,.01,.04,.2,0,0,.39,0,.96,.12,0,.28,.03,.53,.05,.25,.97,0,.45,0,.01,.15,.12,.24,.01,0,.13,0,0,.63,.01,0,0,.69,0,0,0,0,0,.95,0,.07,0,0,.03,.27,.38,.75,.64,0,.34,0,.85,.22,.42,.16,.05,.44,0,0,.92,.13,.7,.88,.54,.24,0,0,0,0,.78,0,0,0,.04,0,0,0,0,0,0,.62,0,0,.88,.17,.07,0,.09,.16,.98,0,.93,.36,.93,.44,.04,.6,.05,.02,0,.35,0,.51,0,.73,.92,.66,0,.06,.72,.34,0,.04,.35,.33,0,0,0,.03,.52,0,0,0,0,.9,0,.17,.18,.98,.25,.22,.66,0,0,.53,0,.56,.08,.01,.88,.7,.17,.23,.75,1,.25,.8,.12,.87,.3,.05,.14,.68,.15,0,.06,.11,.95,.07,0,0,.72,.33,0,.53,0,0,.32,.01,0,.49,.28,.79,.26,.28,0,0,.99,0,0,.71,0,.61,.64,0,0,.61,.26,0,.47,.01,.04,0,.28,0,0,.43,0,0,0,.29,.29,0,.02,.79,.58,0,0,0,.01,0,0,.39,0,0,0,0,.88,0,0,.6,0,0,.76,0,.66,.75,0,.56,.36,.02,0,0,.99,.16,0,0,0,0,.8,.01,0,0,.12,0,.19,.01,0,0,0,.7,0,.79,.2,0,0,.64,.03,.03,.08,0,0,0,0,0,.02,.32,0,.77,.13,0,0,.06,.67,0,0,.01,.81,0,0,.4,.39,.27,0,.54,.99,0,0,.99,0,0,0,.08,.46,.02,0,0,.56,0,.91,.11,.05,.7,0,0,.46,0,0,0,0,0,0,0,.17,.16,0,0,0,.22,0,.24,0,.45,.56,.16,.78,.85,0,.58,0,0,.26,0,.21,.14,0,.71,0,.67,.03,0,0,0,.2,0,.62,0,0,0,.41,0,0,.29,0,.46,0,.44,0,.01,.09,0,0,.1,.7,0,0,.97,.75,0,.83,0,0,.01,.05,.22,0,.08,0,0,0,.73,.97,.96,0,0,0,.77,.82,.22,.55,.01,0,.3,0,.25,.82,0,.26,.87,0,0,.54,0,0,0,.7,.76,.65,0,0,0,0,1,0,.99,0,.94,.02,.12,0,0,.68,.42,0,.78,0,.15,.11,.91,0,.56,.58,.29,.81,0,0,0,.99,.01,.61,0,0,0,0,0,.85,.28,.48,0,0,.47,0,.08,0,0,0,0,.51,.16,0,0,0,.66,0,.57,.03,.01,.03,.34,0,0,0,0,.62,0,.34,0,.31,.1,.16,.73,.45,0,0,.01,0,0,.29,.78,.64,0,.33,.23,0,.01,0,0,.11,0,.01,0,.36,.09,0,0,.54,.39,.02,.54,0,0,.48,0,0,.61,.08,0,0,.07,.04,.04,0,0,.18,.12,.81,.86,.57,.01,.18,.74,0,0,.02,0,0,0,0,.34,.58,.36,0,0,.02,.45,.85,0,0,0,.12,0,0,.47,0,0,.03,.1,.65,0,.23,.14,0,.6,0,.07,.47,.01,.09,.27,0,.26,.19,0,.05,.03,0,0,0,0,.49,.03,0,.24,0,0,.2,0,.93,.85,.59,.24,.65,0,0,.21,.16,0,0,0,0,.09,.39,.85,.23,.06,.01,.01,0,0,0,.7,.08,0,0,.07,0,.04,0,.02,0,0,0,.29,.03,0,.48,0,.73,0,0,.13,.59,0,.27,0,0,.11,.34,0,.48,.9,.24,0,.96,.13,0,0,0,0,0,0,.02,0,0,.05,.96,0,.81,.26,0,.1,0,0,0,0,0,.01,.08,0,0,.35,.05,.01,.29,0,.01,0,0,.12,0,0,0,0,0,0,0,0,0,0,.87,.06,0,.7,0,.29,0,0,.98,0,0,0,0,0,.19,.02,0,0,0,.03,0,0,0,.44,0,0,0,0,.57,0,.12,.01,0,0,.34,.97,0,0,0,0,0,0,0,0,0,.32,.03,.01,.18,.05,0,.04,.23,0,.67,0,0,0,0,0,.01,.88,0,0,0,0,.2,.43,0,0,0,0,0,0,.13,0,0,0,.26,.09,.74,.5,.97,0,0,.06,0,.09,0,.91,.05,0,0,0,0,0,.1,.67,.76,0,0,.9,.11,0,0,0,.04,0,.13,.46,0,.07,0,.33,.3,0,0,0,0,.28,0,0,0,0,0,0,.09,.01,0,.04,0,.19,0,0,.55,0,.07,.1,.01,0,.02,0,0,.79,.57,.08,.04,.46,.93,0,0,0,.3,0,0,0,0,0,0,.82,.31,.1,0,.73,0,.06,0,0,.03,0,0,0,.06,0,0,.02,0,.65,0,0,0,0,.1,.57,.27,.28,0,0,0,0,.86,0,0,0,.85,.19,.12,.48,0,.09,0,0,0,0,.83,0,0,0,0,.03,.2,0,0,.32,.31,0,.21,.02,.2,.75,.02,.28,0,0,.32,0,0,.03,0,.02,0,0,.41,0,0,0,0,.73,0,0,0,0,0,.03,0,0,0,0,0,0,.07,0,0,0,0,.02,.31,.14,0,.26,0,.96,0,0,0,0,0,0,0,.5,0,.5,0,0,0,.29,.07,0,0,0,0,0,0,0,0,.05,.76,.39,.92,.83,.78,0,.17,.42,.4,0,.16,0,.05,.19,.57,.84,.02,.27,0,.24,0,0,0,0,0,.07,.03,.03,.71,0,.17,.16,0,0,.01,.2,0,.63,0,.98,0,.25,0,0,.6,0,.01,.01,.65,0,.01,.15,0,0,0,0,.02,.99,0,0,0,.22,.2,.22,0,0,.66,0,0,0,0,.2,0,0,.02,.51,0,0,0,.47,0,0,.06,.63,.42,0,0,.34,0,.01,.66,0,.06,.68,.35,0,0,0,0,.69,.33,.88,0,0,.23,.62,0,.87,0,0,0,.29,0,0,0,0,0,.58,.16,0,0,.01,.4,.99,.15,.36,0,0,.19,0,.24,.01,0,.94,0,.32,.24,0,.05,.38,.39,0,0,0,0,0,.82,0,.11,.07,.88,.41,.49,0,0,.01,.01,0,0,0,0,0,0,0,0,.53,0,0,0,0,0,.15,0,.02,0,0,.16,0,0,0,0,0,0,0,.45,0,.07,0,.16,0,0,0,0,0,.41,0,0,0,0,0,.65,0,0,.8,0,0,0,0,.05,.99,.49,.68,0,.03,0,0,0,1,0,.45,.11,.33,.35,0,.8,.01,0,.34,.52,0];export{a as pvalData};
