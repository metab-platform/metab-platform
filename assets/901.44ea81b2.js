const a=[.87,.75,.01,.66,.38,0,.28,0,0,.22,0,.56,.64,.03,0,.43,.72,.69,.02,.51,.55,.22,.52,.21,0,.03,.17,.19,.08,.08,0,.26,0,.74,0,.12,.08,.16,.98,.01,.31,.18,0,.15,.92,.29,.48,0,.82,.09,.84,.54,.22,.1,0,0,0,.2,.02,0,0,0,.03,.31,.09,0,.02,.17,.28,.19,.88,.88,0,.17,.83,.4,.59,0,.89,.31,.24,.03,.41,.15,.53,.42,0,.05,.27,.05,.24,.9,0,0,.14,.01,.01,.66,.65,0,.43,.01,0,.39,0,.24,.07,.13,0,0,.65,.02,.87,.01,.01,.54,.3,.03,0,0,.35,.05,.07,.81,.19,0,.48,.05,0,.12,0,.02,.55,.18,.23,.68,.02,.25,.01,.38,.02,.68,.39,.01,.42,.28,.5,.52,0,.9,.01,.02,.82,.54,.01,.05,.04,.71,.39,0,.07,0,.39,.06,0,0,0,.09,0,0,.39,.37,.22,.68,0,.8,.09,.11,.02,.03,.72,.12,.79,.86,0,.4,.17,.81,.69,.6,.24,0,.7,0,0,0,0,.13,.58,.31,.45,0,.12,.36,.91,0,.86,0,0,.25,.07,.12,.84,.17,.19,.02,.97,.02,.45,.03,0,.01,.05,0,0,.1,0,.23,0,.4,.72,.9,.78,.02,.36,.43,.16,.86,.18,.97,.3,.22,.02,.13,0,.16,.48,.49,.32,.53,.14,.64,0,0,.02,.34,.24,0,.61,.72,.88,.69,0,.03,.05,0,.89,.09,.05,.32,.93,.05,.07,.07,.37,.58,.13,0,0,.66,.01,.03,.35,.01,0,0,.15,.09,.19,.19,0,.01,0,.25,0,0,.05,.41,.33,0,.33,.12,.93,.13,.04,.12,0,.02,.1,.08,.68,.84,.57,.74,.01,0,.79,.71,.09,.13,.27,.6,.29,.01,.61,0,0,.1,0,0,.25,.01,0,.2,.02,.48,.03,0,.18,0,0,.02,.67,.22,.25,0,.85,.01,.01,.11,0,.96,.02,0,0,.28,.05,.69,0,.77,.14,.35,.01,.35,.11,.07,.38,.1,.24,.58,.86,.21,.16,0,.01,.09,.08,.03,.14,.07,.71,.04,.52,.76,.67,0,.45,.61,0,0,0,.33,.37,.02,.04,.11,.16,.36,.09,.26,.3,.02,0,0,.02,.36,.59,0,0,.03,.1,.01,.56,0,.05,.73,.06,.01,.01,.98,.14,.04,.11,.68,.7,.06,0,.92,.01,.61,.01,0,0,.02,.35,.99,.89,0,.08,0,0,.31,.42,.4,.45,0,.02,0,.94,.01,0,.02,.01,0,.63,0,.54,.15,.1,0,.45,0,.24,.01,.32,0,.09,.93,.09,.04,.34,.17,0,.43,.05,0,0,.01,0,.03,0,.24,.14,0,.18,0,0,.7,0,.04,.17,.39,.14,.31,.05,.04,.31,.19,0,.03,.05,.25,0,0,.67,.76,.37,0,0,.09,0,.05,.57,.05,.43,.66,.21,0,.01,.07,.15,.03,0,.43,.38,.53,.16,.53,.38,0,0,.5,.65,.74,.31,.08,0,0,.33,.22,.73,.47,.13,.14,.22,.3,.03,.28,.38,.08,.09,.11,.01,.11,.08,.23,.61,.81,.02,.61,.75,.38,.33,0,.09,.27,.98,.32,.06,.39,.01,.12,.93,.23,.27,.13,.27,.15,.11,.53,.34,.5,.01,0,0,.32,.02,.24,.02,.11,.38,.08,.83,0,.01,.03,0,.33,.07,0,0,.56,.17,.07,.59,.08,.07,0,.9,.04,.6,.05,.62,0,.71,.33,.04,.14,.02,.44,.14,.23,0,.77,0,.87,.35,.18,0,.3,.5,.18,.38,.02,0,.02,0,.15,.02,.59,.31,0,.65,.09,.8,.03,.58,.12,.03,0,.94,0,.03,.02,0,.01,.72,.08,.05,.46,.14,0,.12,.36,.75,.3,.91,0,0,.26,0,.14,.31,.07,.01,.88,0,.57,.93,.4,.68,.42,.02,0,.03,.06,.19,.13,0,0,.63,.11,.48,.23,.54,.24,.09,.04,.16,.24,.28,0,0,.56,0,.72,.58,.01,.08,.35,0,.07,.41,0,.84,.06,.03,.1,.1,.54,0,0,.04,.95,.01,.04,.96,.61,.74,.37,.24,.02,0,.52,0,.02,.15,.99,.11,.84,0,0,.02,.08,.43,.85,.03,.08,.38,.18,.69,0,.54,.58,.92,0,.01,.03,0,.33,.54,0,0,.22,.04,.35,.1,.47,.29,.08,.54,.04,.26,.78,.06,.12,.03,.01,.14,.44,0,.01,.64,.37,.01,0,0,0,0,.21,.5,.02,0,.41,0,.02,.03,.53,.82,0,.25,.58,0,0,.04,0,0,.82,.9,.71,.05,.77,0,.59,.02,.11,0,.27,.33,.03,.57,.23,0,.1,.57,.15,.87,0,.56,.63,.38,.14,.36,.94,.85,.91,.19,0,.48,.52,0,0,.44,.02,.1,.09,.4,.79,0,.76,.62,.43,0,.54,.97,0,.43,.8,0,0,0,.08,.01,.21,.28,.47,.16,0,.76,.06,.06,.06,.04,.06,.03,.41,.79,.01,.92,.14,.06,0,.26,.09,.6,.42,0,0,0,.62,.06,.11,.03,0,.17,.13,.03,.04,.06,.1,0,.14,.16,.46,.69,0,.32,0,.71,.01,.72,.09,.32,.06,.05,0,.03,.02,.05,.65,.04,.28,.5,.3,0,.35,.67,.11,.16,.99,0,.37,.19,.05,.79,.01,0,.42,.06,.24,.5,0,.14,.31,.18,.12,.01,0,.57,.17,.01,.1,0,0,.15,.15,.06,.45,.2,0,0,.05,.74,.21,0,.16,.47,0,.19,.07,0,.2,.03,.01,.06,.3,.31,.01,0,0,.13,.03,.01,.03,0,0,.53,.32,.17,.05,.01,.11,.01,.31,.11,.01,.5,.74,.81,.07,.38,.36,.54,.95,.57,.97,.48,.92,.12,.63,.08,0,0,.19,0,.1,0,.82,.41,.59,.55,.23,.07,0,.56,.11,0,.59,.48,.07,.1,.81,.01,0,.6,0,.06,0,.44,.95,0,.04,.09,.02,.62,.05,.94,.39,.17,.35,.01,0,.4,0,.18,.08,.26,.65,.02,0,.14,.74,.05,.08,.7,0,.11,0,.1,.19,.01,.32,.01,.07,0,0,.15,.02,.11,.24,.6,.02,.48,.35,0,.01,.32,.09,.34,0,.34,.7,.03,.07,.1,.02,0,0,0,0,.01,.37,.73,.15,0,0,.2,.09,0,.02,.06,.04,0,.51,.85,.41,.15,.1,.01,.01,.26,.34,.51,.63,.98,.82,.89,.66,.96,.92,.71,0,.2,.02,.01,.59,0,.13,.43,.02,.02,0,.85,.01,.06,.48,0,.94,0,0,.94,.16,.27,0,.34,.01,.62,0,.13,.74,.01,0,.29,.03,0,0,.12,.01,.01,.01,.68,.27,0,0,0,.78,.27,.78,.05,.22,.02,.54,.04,.02,.22,.7,.35,.14,0,.04,.12,0,.02,0,0,.14,.14,0,0,.06,.27,0,.05,0,0,0,.01,.12,.61,.01,0,.3,.05,.23,.01,.03,.43,.19,.1,.01,.05,.55,0,.59,.26,.52,.73,.01,.13,.56,0,.02,0,.27,.67,0,.28,.14,.64,.54,.16,.36,0,.7,.47,.37,.73,.29,0,.2,0,.73,.13,.65,.29,.85,0,0,.01,0,.34,.01,1,.03,.02,.11,.02,.03,.02,.59,.05,.05,0,.08,0,.14,0,.71,.24,.91,0,0,0,.03,.11,.96,.03,.32,.83,.67,0,.06,.04,.01,.67,0,0,0,.4,.05,0,0,.48,.15,.75,.37,.01,.09,.1,.21,.23,.01,.32,.01,.05,.16,.19,0,.21,.73,.05,0,.01,.02,.09,.27,.59,.17,0,.02,.05,0,.65,.05,.02,.99,.01,.94,.76,0,0,.17,.04,.18,0,.26,.48,0,.54,.11,0,0,0,0,.36,0,.21,0,0,0,0,0,.67,0,.67,0,0,0,.03,.65,.13,0,0,.18,.02,0,0,.2,.08,.04,.62,0,0,.87,0,0,.8,.81,0,0,.02,0,.05,0,.16,0,.03,.43,.16,.11,.01,.31,.2,.02,0,.18,.05,.01,0,.59,0,.01,.09,0,.43,.17,.15,.96,0,.61,0,.31,.13,.05,.94,.89,.03,.02,.52,.01,.15,.3,0,.81,.26,0,.8,.38,0,.49,.37,.21,.1,.2,.61,0,.28,.97,.97,0,.37,.65,.36,0,.34,0,0,1,.08,.32,.69,.22,0,.75,0,0,.01,.17,.02,0,0,.53,.05,.51,0,.09,0,0,0,.62,0,0,.35,.02,.01,0,0,0,.65,0,.05,0,0,.66,.77,.51,.25,.08,.62,0,.25,0,.59,0,0,0,.08,0,.32,0,.02,.2,.07,0,.76,.66,.38,.86,.06,0,.91,.25,.01,.01,.71,.7,.01,.73,.74,.63,.66,0,0,0,0,.7,.7,0,.05,.02,0,.01,.02,0,0,0,.67,.88,.22,.33,.17,.07,0,.07,.96,.86,0,.67,0,.92,.85,.04,.18,.99,.01,.07,.03,.54,.12,.78,0,.08,0,0,.45,0,.02,0,0,.17,.97,.35,0,.04,.01,.03,0,0,0,.01,.16,0,.47,.02,.86,.23,.09,.21,.7,0,.17,.48,.69,0,.05,.01,.47,.08,.02,0,.01,.01,.88,.24,.02,0,.05,.01,0,0,.46,0,.09,0,.08,.84,.72,.36,.65,.41,.09,.01,0,.95,0,.65,.9,0,0,0,0,.08,.5,.69,.23,.01,0,.2,.89,0,.04,.16,.41,.55,.75,.02,.08,0,0,.23,.85,.28,.12,0,0,.59,.38,0,0,0,.18,0,.85,.28,0,.2,0,.39,.04,0,.07,.03,.06,.01,0,.1,.3,.71,0,0,.14,.65,0,.96,.34,.01,0,.07,.08,.01,0,0,.03,0,.03,.54,.74,.43,0,.52,.02,.85,.77,.67,1,.02,.19,.38,.57,.21,.32,.35,0,.57,.29,0,0,.99,.08,.11,.45,0,.02,.05,.83,0,.02,.01,.02,0,.38,.04,.19,.85,0,.95,.04,.27,0,0,.37,.06,0,0,0,.88,.37,0,.86,.04,.23,0,.94,.26,.61,.08,.28,.7,0,0,.85,.53,.05,.5,.11,0,0,.01,.26,0,.07,.13,.56,.34,0,.01,0,0,.92,.6,0,0,0,0,0,.09,.13,.02,.54,.01,.9,.19,.37,.01,.03,0,0,.05,0,.01,.03,.02,.08,.2,.01,.49,0,.46,.01,0,0,.25,.04,0,0,0,0,.64,.02,0,.01,.85,.79,.85,.54,.62,.45,0,.5,0,0,0,.17,.83,0,.55,.42,.12,.39,.39,.36,.39,0,0,.93,.87,.89,0,.84,.1,.58,0,.66,.61,0,0,0,0,.57,.08,.01,.58,.1,0,0,0,.66,.01,.1,.07,.65,.05,.24,.12,0,0,.01,0,.28,.01,.09,0,.22,.71,.09,0,.02,.25,.06,0,.38,.84,.55,.01,.05,.22,0,.39,0,0,0,.97,.51,.52,.01,.55,.58,.09,.9,.1,.18,0,.14,0,.95,.38,.84,.01,.21,.07,.73,.29,.13,.33,0,0,.79,.32,.67,.5,.08,.06,.17,.57,.1,.3,.21,.06,0,.76,.95,.01,.59,.06,0,.49,.05,.18,.3,0,.08,.27,.05,0,.08,.46,.01,.56,.11,0,.56,.18,.19,.01,.09,.48,.01,0,.71,0,0,.52,0,.62,.02,0,.05,.05,.2,.16,0,.09,0,.02,.31,.06,.03,.1,0,.1,.3,.01,.12,.64,.04,.01,0,.06,.01,.28,.13,0,0,.1,.27,.47,.42,.11,.34,.11,.11,.03,.24,.27,.56,.48,.04,0,.01,0,0,.43,.3,.04,.02,.27,0,.04,.45,.01,.08,.66,.91,.42,.04,.05,0,.04,.12,.85,0,.04,.16,.68,.82,0,.02,.03,.02,.27,.54,0];export{a as pvalData};
