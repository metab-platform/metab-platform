const a=[.6,.83,.62,.39,.7,.56,.01,0,.54,0,.81,.81,.5,.39,.58,.78,.02,.22,.1,.61,.56,.98,.05,.12,.06,.93,.23,.13,0,.04,.36,.57,.02,.67,0,.17,.78,.04,.03,.01,.27,.88,0,.51,.37,.27,0,.4,.5,.07,.41,.09,.08,.1,.01,.71,.56,.12,.06,.24,.84,.1,.78,.2,.06,.4,.62,.1,.89,.99,.28,.09,.68,.73,.42,.56,.42,.86,0,.84,.31,.01,.02,.58,.08,.4,.78,.83,.31,.03,.3,.36,.05,.04,.29,.98,.95,.99,.66,.66,.76,.21,.2,.4,.85,.71,.91,.09,.1,.18,.62,.13,.15,.53,.55,.41,0,.83,.93,.08,.85,.83,.04,.96,0,.19,.07,.14,.24,.86,0,0,.07,.03,.25,.29,0,.64,.35,.52,.28,.44,.39,1,.08,.01,.16,.76,.28,.98,.08,.7,.84,.64,0,.26,0,.54,.82,.6,0,.78,.01,.38,.09,.8,.32,.67,.43,.36,.42,.82,0,0,0,.73,.07,.32,.15,.59,.12,.91,.26,.63,.07,.66,.52,.12,0,.59,.14,.31,.37,.46,.39,.84,.42,.05,.87,.83,0,.21,.94,.58,.8,.04,0,.01,.55,.67,0,.03,.87,.06,.15,.27,.04,0,.76,.67,.35,.58,0,.45,.43,.86,0,.63,.48,0,.58,.72,.03,.83,.51,.19,.25,.95,.23,.97,.14,.01,.01,0,0,.08,.23,.17,.03,.69,.45,.01,.02,.94,.26,.53,.04,.01,.94,.97,.7,.74,.11,.29,.98,.55,.58,.85,.87,.58,.79,0,.74,.53,.05,.64,.42,.21,.73,.39,0,.43,.03,.72,.11,.01,.29,.95,.94,.97,.02,.05,.02,.11,.6,0,.09,.41,.61,.01,.62,.32,.12,.6,.67,.01,.64,.49,.55,.2,.99,.78,.01,.11,.71,.01,.98,.38,.73,.13,.95,.49,.21,.35,.01,.23,0,.13,0,.23,.06,.2,.03,.94,.46,.62,.78,.01,0,.65,.01,.01,.38,.63,.56,.87,.86,.11,0,.01,.17,0,.62,.26,.97,.01,.38,.31,.12,.57,.5,.08,.07,.22,.51,.58,.02,.89,.95,.97,.29,.6,.67,.89,.85,.31,.22,.36,.41,.12,.15,.83,.89,.03,.34,.03,.9,.59,.34,.08,.97,.28,.91,0,0,.24,.27,.96,.2,0,.12,.78,.78,.42,0,.17,.04,.92,.11,.22,.99,.48,.14,.46,.86,.98,.75,.07,0,.85,.03,.81,.29,.81,.06,.45,.07,.52,0,0,.01,.66,.07,.34,0,.12,0,0,.33,.25,.9,.2,.3,.08,.18,.98,.13,0,.22,.94,.85,.43,.91,.98,.02,.34,.07,.79,.59,.74,.41,0,.55,.41,0,.02,.52,.56,.76,.21,.34,.97,.09,.2,.09,.03,0,.53,.95,.44,.12,.12,.87,.1,.36,.34,0,0,0,.91,.14,.57,.96,0,.14,.77,.12,.28,.99,.12,.01,.16,.16,.67,.19,.44,.3,.55,.01,.4,.65,.93,.38,.58,.35,.47,0,.05,.18,.83,.97,.48,.65,.09,0,.44,0,.08,.08,0,.04,.07,.7,0,.48,.15,.61,.07,.16,.41,.16,.33,.24,.53,.78,.74,0,.33,.12,.03,.15,.87,.17,.79,0,.76,.89,0,.1,.45,.33,.57,0,.01,.91,.91,.84,.5,0,.5,.6,.94,.48,0,.46,.34,.01,.03,.04,.33,.76,.07,.3,.61,.72,.01,.19,.01,.42,.73,.57,.5,.9,.3,0,.86,.06,.66,.34,0,.65,.33,.57,.2,0,.07,0,.28,.52,.1,.5,.52,.23,.31,.89,.56,.25,.07,.66,.17,.14,0,.03,.22,.41,.57,.1,.43,.79,.02,.24,.07,.22,.74,.88,.67,.02,0,.16,.08,.84,.8,.78,.14,.1,.83,.17,.79,.92,.74,.6,.74,0,.35,.03,.73,0,.72,.33,.04,.21,0,.94,.11,0,.05,.42,.77,.78,.82,.66,.65,.94,.2,.86,0,.15,.13,.45,.03,.23,1,.03,.01,.84,.15,.18,.89,.15,.17,.21,.19,.75,.2,.45,.78,.02,.13,.27,.86,.77,.01,.01,.3,.76,.57,.53,.63,.07,.39,.55,0,0,.01,.34,.13,.07,.49,.61,.24,.01,.69,.8,.37,.71,.32,.77,.05,.94,1,.44,.3,.1,.49,.05,0,.91,.57,.5,.98,.05,.19,.8,.17,.72,.43,.72,.94,.14,0,.83,.52,.21,0,.05,.03,.81,.47,.02,.14,.02,.37,.05,.25,.46,.8,.75,.9,.49,.62,.2,.79,.79,.17,.09,.08,.81,.01,.76,.48,.39,.32,.12,.47,.87,.42,.01,.6,.61,.08,.26,.26,.92,.02,.25,.63,.93,.41,.59,.48,.18,.67,.94,.81,.69,.8,.75,1,.07,.64,.57,.24,.08,.18,.67,.02,.75,.69,.15,.09,.51,.5,.01,.45,.18,.36,.33,.79,.46,.73,.97,.99,.48,.39,.74,.23,.53,.7,.64,.9,.07,.38,.93,.01,.06,.07,.2,.42,.01,.08,.8,.41,.14,.45,.4,.82,.1,.39,.07,.17,.72,.63,.94,.03,.86,.01,.66,.69,0,0,.43,.24,.81,.1,.57,.15,.01,.12,.75,.21,.75,.03,.27,.46,.6,.67,.64,.3,.08,0,.49,.65,.96,.07,.18,.94,.57,.2,.62,.74,.19,.82,.47,.81,.2,.01,.01,0,.59,0,.64,.21,.01,0,.46,.15,.96,0,0,.47,.62,.5,0,.03,.08,.61,.65,.35,.89,.66,.29,.41,.54,.57,.79,.9,.33,.92,.09,.68,.23,.78,.53,.56,.01,.24,0,.89,.64,.28,.02,.18,.42,.9,0,.27,.89,.21,.77,.95,.07,.88,0,.37,.83,.45,.65,0,.3,.99,.37,.23,.04,.81,.66,.03,.47,.05,.08,.38,.94,0,.2,0,0,0,.01,.33,.59,.59,.13,.01,.01,.01,.69,.01,.61,.03,.6,.63,.63,.36,.27,.78,.94,0,.56,.8,.32,.99,.13,0,.12,.21,.84,.51,.29,.66,.92,.33,.5,.25,.11,.03,0,.6,.07,.09,.23,.82,0,.74,.22,.35,.91,.1,.63,.83,.86,.47,0,.35,0,.59,.37,.09,.59,.3,.09,.76,.11,0,.36,0,.53,.2,.69,.19,.92,.05,.38,.32,0,.14,.45,.89,.42,.04,.92,.99,0,.07,.77,.59,.22,0,.36,.03,.07,.21,.46,.83,.88,.63,.17,.88,.28,.03,.7,.67,.01,.86,.89,.88,.59,.5,.01,.75,.15,.01,.06,.58,0,.78,.07,.04,0,.64,.01,.6,.47,0,.47,.29,.76,.4,.61,.12,.21,.32,.01,.04,.31,.64,.68,.52,.49,0,.69,.47,.1,.05,.68,.04,.04,.81,.09,0,.24,.03,.1,.01,.68,.01,.74,.12,.34,.5,.5,.02,.15,.16,.2,.06,.78,.36,.1,.56,.28,.13,.12,.9,.16,.45,.23,.04,.85,.05,.21,0,.42,.62,0,.2,.23,.95,.87,.63,.05,.8,.06,.39,.69,.01,.66,.45,.61,.94,.01,.71,.07,.19,.9,.69,.52,.68,.53,.71,.87,0,.69,.77,.34,.91,.11,.76,.37,.97,.18,0,.46,.06,.2,0,.55,.1,.36,.89,.06,.25,.48,.94,0,.12,.18,.07,.51,.39,.67,.6,.46,.08,.17,.86,.66,.44,.18,.16,.93,.07,.84,.81,.45,.04,.12,.84,.75,.01,0,.04,.88,.19,.03,.15,.94,.13,.03,.27,.02,.49,.69,.02,.22,.02,.91,.54,.14,.7,.08,.65,.07,.17,.3,0,.1,.02,0,.98,0,.9,.07,.63,.64,0,.12,.29,.28,0,.52,.86,.94,.59,.99,.16,0,.94,.77,.87,.34,.65,.06,.89,.05,.58,.22,.55,.62,0,.76,.57,.14,.09,.57,0,.75,.17,.01,.01,.98,.56,.25,.85,.59,.02,.24,.34,.73,.39,.77,.74,.98,.81,0,.01,.15,.41,0,.76,.02,.07,.55,.46,.14,.25,.46,.67,.25,.03,.19,.82,.22,.56,.3,.07,.8,.76,.8,.04,.09,.09,.66,.9,.95,.11,0,.01,.71,.02,.01,.01,.04,.05,.13,.78,.02,.02,0,0,0,0,0,.02,0,.54,0,.63,.37,.04,.26,.31,.02,.79,0,.11,.93,0,.08,.01,.03,.84,0,.69,.69,.69,.13,.11,.08,.3,.25,.46,.23,.19,.32,.03,.24,.44,.84,.04,.84,.89,.27,.74,.24,.01,.28,.24,0,.23,.48,.55,.49,0,.21,.44,.33,.84,.71,.84,.24,.83,.06,.83,0,.79,.92,.09,.84,0,.84,.57,.8,0,.48,.07,.42,.96,0,.01,.65,.85,.49,.53,.68,.56,.02,.32,.45,.92,.08,.73,.27,.91,0,.62,.45,.62,.25,.81,.63,.94,0,.04,.05,.58,.03,.28,.01,.02,.8,.89,0,.51,0,.24,.57,.03,.92,.89,.94,.01,0,0,.45,.13,.64,.03,.19,0,.37,.54,0,.04,.18,.14,.34,.43,.72,.34,.2,.03,.47,.23,.02,.76,.93,.88,.14,.39,.85,.53,.89,.63,.43,.74,.25,.7,.14,.03,.04,.24,.06,.28,.74,.9,.29,.34,.38,.04,.46,.07,.2,.28,.97,.23,.78,.36,.44,.55,.72,.26,0,.41,.11,.55,.44,0,.61,.54,.01,.93,.09,.44,.14,.22,.14,0,.4,.24,.81,.02,.01,.01,.9,.46,.07,.01,0,.71,.62,.97,.76,.38,.7,.07,.7,0,.3,.01,.84,.78,.02,.59,.53,0,.1,.36,.24,.47,.75,.08,.01,.6,.96,.19,.27,0,.58,.4,.99,.7,.07,.29,.81,.19,.75,.28,.04,.57,.69,.03,.61,.6,.08,.32,.14,.13,.07,.17,.34,.3,.34,.58,.87,.13,.61,.03,.03,.2,.89,.13,.36,.99,.51,.85,.85,.84,.9,.36,.45,.07,.68,.13,.17,.24,.09,.1,.46,.01,.85,.76,.55,.13,.28,0,.84,.56,.51,.55,.88,.46,.35,.81,.85,0,.26,.47,.28,0,.3,.02,.74,.23,.47,.51,.27,.14,.56,.05,0,.73,.06,.07,.62,.99,.11,.08,.73,0,.88,.49,.03,0,.34,.56,.32,.25,.63,.95,.61,.01,.03,.18,.25,.49,.71,.58,.78,.38,0,.06,.58,.96,0,.86,1,.57,.02,.51,.08,.01,.24,.38,.37,.93,.93,.7,.88,.02,.16,.48,.56,.39,.7,.43,.86,.24,.58,.19,.06,.75,0,.25,.51,.99,.81,.68,.36,.14,.2,1,.85,.19,.23,0,.7,.03,.95,.75,.57,.29,.28,.65,0,.17,.04,.35,.26,.36,.01,.76,.54,.28,.15,.6,.25,.01,.5,.53,.68,.9,.46,.15,.35,.98,.69,.28,.18,.95,.92,.24,.26,.82,.6,.47,.56,.91,.55,.81,.98,.69,.01,.35,0,.36,.59,.39,.66,.4,.81,.01,.89,.42,.24,.04,.27,.1,.16,.53,0,.19,0,0,.76,.66,.02,0,.05,.07,.23,.75,.43,.46,.03,.52,.61,0,.35,0,.05,.75,.08,.66,.7,0,.4,0,.39,.02,.43,.18,.62,.13,.82,.1,0,0,.84,.43,.62,.31,.71,.07,.49,.58,.42,.37,.83,.02,.99,.31,.93,.01,.01,.1,.75,.26,.37,.23,.17,.05,.89,.05,.01,.01,.13,.54,.48,0,0,.43,.32,.52,.44,.05,.34,.21,.65,.14,.8,.02,.61,.06,.6,.39,.96,.23,.08,.21,.91,.08,.38,.12,.92,.71,.24,0,.48,.03,.47,.05,.76,.32,.37,.88,.7,.96,.49,.68,.01,.78,0,.91,.94,.05,0,.7,.88,.93,.7,.99,0,.09,.99,.4,.07,.64,0,.78,.03,.68,.89,.77,.26,.02,.24,.11,.24,.68,.38,.09,.32,.41,.51,.48,0,.07,.88,.02,.79,.85,0,.13,.05,.59,.04,.54,.37,.16,.31,.93,.86,.08,.38,.43,.1,.14,.97,.3,0,.38,.76,.88,.01,.68,.97,.73,.68,.88,.1,.63,.42,.93,.4,.48,.59,.35,.02,.77,.63,0,.02,.65,.21,.19,0,.97,.54,.79,.32,.1,.83,.89,.12,0,.99,.08,.13,.24,.06,.4,.1,.92,.07,.74,.79,.29,.12,0,.1,.13,.07,.03];export{a as pvalData};
