const a=[.73,.89,.33,.27,.16,0,.01,0,.14,.86,.03,.37,.5,.03,.01,.65,.56,.89,.42,.35,.35,0,.17,0,.79,.02,0,.01,.04,0,0,0,.11,.01,.09,.1,.28,0,0,.19,.42,.02,.03,.81,.3,0,.15,.86,0,0,.44,.51,.05,.47,0,.08,.81,0,.1,.12,0,0,0,.68,.15,0,0,0,.41,.34,.66,.21,0,0,.24,.39,.01,0,.64,0,.12,.05,.8,.01,.98,0,.05,.83,.04,.43,0,.24,0,.67,.45,0,.01,.01,.11,0,1,0,0,.99,0,.89,.01,0,.1,0,.9,0,.02,.27,.75,.89,.94,0,.5,.23,.69,0,.33,.39,.27,0,.14,.04,0,.39,0,.22,.63,0,.05,.35,0,0,0,.91,0,.29,0,.05,.17,.59,.76,0,0,.54,0,0,.93,.94,0,0,.18,.94,.07,0,0,0,.28,0,0,0,.13,0,0,.03,.08,0,0,0,0,0,.1,0,0,.29,.3,.54,.51,.18,0,.04,.31,.74,0,.82,.95,0,.47,0,0,.57,0,.02,.41,0,.05,0,.78,.67,.49,0,.78,0,0,.52,0,0,.26,.11,0,0,.25,0,0,0,0,0,0,.29,0,.68,0,0,0,0,.69,.49,.16,.37,.12,.11,0,0,0,.26,0,0,0,0,0,.05,.77,.08,.43,.92,0,.05,0,0,0,.22,.68,0,0,.43,.16,0,0,0,0,0,0,0,.67,.16,.01,.95,.93,.31,.31,.42,0,0,.01,0,0,0,.05,.32,0,.04,0,.2,0,0,0,0,.01,.14,0,.01,0,.11,.14,0,.98,.8,0,.33,.11,.28,.72,0,0,0,.01,.81,.34,.35,.01,0,0,0,.18,0,0,.56,0,0,0,0,.03,.41,.42,0,.01,0,.01,.39,0,.17,0,0,.15,0,0,.03,.39,.37,.16,.08,.36,0,.06,0,0,0,.09,0,0,.04,0,.01,0,.79,.8,.86,0,0,.66,.58,.01,.72,0,.6,0,.51,.38,0,0,0,.98,0,.19,0,.35,.39,.44,.59,.87,0,.01,.88,.02,.02,.01,.78,.69,.95,.32,.76,0,.51,.12,.5,.48,0,.02,.01,0,.6,0,0,0,0,.27,.02,0,0,0,.58,0,.97,0,.17,.2,.55,0,.48,.47,.87,.87,.44,0,0,0,0,.21,.35,0,.9,.07,.01,.26,0,0,0,0,.17,0,0,.98,.01,.59,0,.04,0,.02,0,.8,0,0,.92,0,.02,.09,0,.19,0,.84,.05,.69,.57,0,.62,0,.41,.29,.08,0,.08,.14,.07,.59,0,0,.03,.02,0,0,0,0,.01,.93,.28,.6,.4,.85,.02,.03,.82,0,.01,.06,0,0,.07,0,.19,0,.09,0,.01,.79,0,0,0,0,0,0,0,0,0,0,.02,.03,.14,.01,.3,0,.39,.74,.59,.92,0,0,0,.6,0,.07,0,0,.3,0,.71,.26,0,.21,0,0,.69,0,0,.01,.04,0,.7,.25,.95,0,.33,0,0,0,.72,.48,0,0,0,.4,.64,.24,.02,0,.07,.01,.33,.21,.37,.02,.88,.49,0,0,.69,0,.47,0,0,0,.01,.87,0,0,.14,.5,.97,.75,0,0,.49,.05,.5,0,.1,.11,.25,.15,0,.87,0,0,.77,.68,.07,.86,.09,.02,0,.44,.76,.56,.04,0,.5,0,.04,0,.55,0,.43,.33,0,0,.17,.39,0,.02,0,.06,0,.09,0,0,0,0,.01,0,.07,.96,0,0,0,.9,0,.66,.01,0,.36,.07,.2,0,.01,.67,.99,.69,.01,.5,0,.87,.11,.36,0,0,.11,.01,.97,.28,0,0,0,0,.29,.77,.44,.89,0,.22,.03,0,.01,.1,.01,.01,0,.81,.97,0,.45,.06,.66,.38,0,.01,.08,0,0,0,.85,.1,.05,.95,.38,.45,0,.01,0,0,0,.27,.77,.19,.03,.01,.73,0,0,.21,.35,.27,.47,.17,0,.36,.02,.01,0,.03,.03,0,0,.1,.63,.21,.68,.1,.1,0,0,.57,.72,.03,.04,0,0,.7,.04,.47,0,.78,.56,.82,0,.01,.64,.29,0,.18,.01,0,.11,0,.72,0,0,0,0,.09,.17,0,.3,0,0,.24,0,.28,.1,.55,0,.31,0,0,0,.09,0,0,0,0,0,.05,0,.53,0,.74,0,.93,.08,0,0,.46,0,.02,.18,0,.38,.66,.53,.02,.01,0,0,.02,0,.33,.46,.27,.26,0,.69,.47,.77,.13,0,.11,.96,0,.7,0,.27,.38,.02,.02,0,.06,0,0,.2,1,0,0,.01,0,0,0,.17,.73,0,0,.44,.31,0,0,0,0,.1,0,.5,.85,.07,0,0,0,.02,0,0,.02,.79,.45,0,0,0,.39,0,.14,.04,0,.51,.99,0,.05,.14,0,.14,0,.07,0,.9,.04,0,.01,.24,.04,.21,.02,.65,0,.2,.72,.2,.59,.17,.72,0,.83,0,.18,0,0,.03,0,0,.04,0,0,.25,0,.02,.6,.71,0,.14,.08,.94,.02,0,0,.76,.57,.02,.01,.09,0,.95,0,.02,.05,.03,0,.02,.01,.01,0,.47,.2,.03,0,.28,0,.9,0,.43,0,0,.01,0,.18,.85,.12,.39,0,.91,.08,.01,.01,.66,0,0,0,.03,0,.13,.02,0,0,0,.09,0,0,0,0,0,0,.5,.54,0,0,0,0,.01,.3,0,.14,.7,.37,.63,.49,.46,.57,.17,.89,0,.35,.71,.18,.65,0,0,0,0,0,.48,.01,.02,0,.79,0,.05,.21,0,.18,0,0,.47,.73,.13,0,.36,.33,0,.11,0,.32,0,.5,.55,0,.97,0,.93,.85,0,.61,.59,.02,.04,0,.05,.02,0,.78,.44,.23,.03,0,.2,0,.94,.66,.29,0,0,0,.11,.96,.61,0,0,0,.71,.56,.07,.21,0,0,.27,.26,0,.66,.5,0,0,.76,.39,0,0,.21,.02,.01,0,.71,0,0,0,.01,.03,0,0,0,.37,.35,.01,.55,.35,0,.35,.11,0,0,.5,0,0,.76,.27,0,.27,.49,0,.04,.6,.04,.48,.35,0,0,.63,0,.01,.63,.07,.16,.13,.01,0,.07,0,.27,.06,.49,0,0,.15,.77,.04,.02,0,.45,.17,0,0,.87,0,.32,0,.02,.42,.43,.01,.66,0,.12,.1,.11,.14,0,0,0,.8,.03,0,0,.33,.02,.95,.04,.35,0,.87,.38,0,.13,.2,.86,.05,.08,.87,.14,.01,.1,.74,.04,.95,.95,0,0,.41,0,0,.55,.01,0,0,0,.43,.13,0,.11,.45,.07,0,.84,0,.15,0,.16,0,.01,.01,.01,.17,.11,0,.6,0,0,0,0,0,0,.66,.26,.11,.11,.97,.62,.2,.08,.06,.37,.83,.16,.69,.31,.94,.01,.07,0,.72,.07,0,.73,.87,0,0,0,0,.03,.42,.43,0,0,0,0,0,0,.83,.82,.44,0,0,0,.01,.23,.99,0,.89,0,0,.56,0,.9,.63,.53,.22,.64,.24,.11,.01,0,0,0,0,.73,0,.02,0,.21,0,.9,.41,.82,0,0,0,.84,0,0,.54,.69,0,0,.02,0,0,.32,.26,0,0,.19,.44,0,0,.59,0,0,0,.01,.01,0,0,.12,.48,0,.4,.88,0,.01,.59,.26,0,.17,.16,0,0,.16,.85,0,0,0,0,.04,0,0,0,0,0,0,0,.7,.04,.05,0,0,0,.23,.11,.18,.03,0,.36,0,.86,.25,.04,0,.51,.02,.05,.01,.37,0,.56,.31,.54,0,0,0,0,0,0,.39,.04,0,.72,.68,.11,0,.55,0,.28,0,0,.05,0,0,.1,0,.02,0,0,.04,.03,0,0,0,.5,.36,.13,.25,0,0,.83,.98,.09,0,.55,.21,0,0,0,.02,.03,.17,.76,0,.68,0,0,0,.01,.3,0,.78,.76,.62,.1,.58,.26,.32,.26,.13,0,0,0,.04,.42,.53,0,.41,0,0,0,.01,.92,.96,0,0,.37,.34,0,0,.89,0,0,0,.92,0,.01,.97,0,0,.01,0,.75,.92,0,0,0,0,0,.01,0,.62,.66,.26,.05,.68,.04,.22,0,.41,0,.74,0,0,.75,.36,.21,0,0,.43,.46,.01,.18,0,.18,0,0,0,0,0,.09,0,.64,.74,0,0,0,0,.01,0,.12,0,.01,0,.37,0,0,.04,0,0,.03,0,0,.02,.01,0,.27,0,0,.58,0,0,.06,0,0,.8,.01,.01,0,0,0,.03,0,0,.56,.01,.11,.04,0,.11,.23,0,0,0,0,0,.2,0,0,0,0,0,.01,.04,.97,0,.1,0,0,.49,0,.53,0,.83,.5,0,0,0,0,.83,.28,.31,.51,.67,0,0,.2,.55,.58,0,0,0,0,0,0,.97,0,.14,0,.19,0,.26,.62,.85,0,.99,.1,0,.26,0,.33,0,0,0,0,0,0,0,.95,0,0,.01,.9,.77,0,0,0,0,.07,0,.05,0,0,0,0,.9,.83,.59,0,.01,0,.74,0,0,0,.17,0,.32,0,0,.05,0,.11,.22,0,.82,0,.04,0,.26,0,.1,.03,0,0,.03,0,0,.07,.43,0,.26,0,0,0,0,.07,.11,0,.54,.02,.07,0,0,.31,0,.99,0,0,0,.66,.31,.03,.51,.74,0,0,0,0,0,.26,.03,.89,.02,.21,.17,0,0,.5,0,0,0,0,0,.01,.13,0,.87,.98,0,.05,.69,.08,.13,.08,.99,0,.16,0,0,.43,.57,.2,.64,.83,0,0,.02,0,.39,.18,.69,.9,0,0,.72,.91,.9,.48,.47,.03,0,0,.17,.01,.7,.09,.26,0,0,.01,0,0,0,0,0,.33,0,0,0,0,.01,0,.05,0,0,0,0,0,.1,0,0,.26,0,.59,0,.21,.72,.33,0,.5,0,.73,.03,.01,0,.82,0,0,.52,0,0,0,.01,0,.24,.69,.1,.19,.13,.2,.08,.13,0,.01,.02,.01,.82,.9,.97,0,.04,.25,.13,.5,.45,.9,0,.06,0,.25,0,.08,0,.08,.21,0,.82,0,0,0,.23,.21,.29,.01,0,.03,.75,0,0,0,.41,.38,.03,.01,.56,.18,.24,.82,0,0,0,0,.39,0,0,0,0,.11,.18,.49,.01,.75,.51,.02,.02,.23,0,.22,.02,.1,0,0,0,0,0,.68,.01,.85,.04,.75,.16,.66,.58,.2,.01,0,.86,0,.01,.8,.85,0,0,.01,0,.2,.28,.84,.49,.03,.54,.39,0,.01,.37,.21,.19,0,.97,.37,.59,0,.02,.2,.01,0,.06,0,.01,.25,.82,.45,.25,0,0,.82,.55,.15,.59,0,0,.06,.08,0,.96,0,.32,0,.5,.17,.37,0,.11,0,.92,0,.28,.64,.04,.01,.31,0,.03,0,0,.28,.97,.01,0,.16,0,.12,0,.03,.05,0,.42,.6,0,.01,0,.31,0,.01,.59,.04,.03,.71,.06,.02,0,.69,0,0,.01,.96,.1,.22,.69,.14,0,0,.02,0,.13,.99,.05,.95,.23,.54,0,0,.18,0,0,.63,0,0,.12,0,.01,.04,0,0,0,.2,.01,0,.73,.02,.48,0,.32,.01,.9,0];export{a as pvalData};
